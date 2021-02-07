import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { reciveData } from '../../../actions/photogallery/photogallery.js'
import { errorData } from '../../../actions/photogallery/photogallery.js'

import SliderPhotogalleryInfo from '../../../components/templates/slider/SliderPhotogalleryInfo';
import { wrapContainer } from '../../../containers/wrap-containers';

import Loader from '../../../components/templates/loader';
import Error from '../../../components/templates/error';
import GalleryInfo from '../../../components/templates/slider/GalleryInfo';

import QueryTransformer from '../../../utils/QueryTransformer';

class SliderPhotogallery extends Component {
  constructor() {
    super();
    this.state = {
    photogalleryInfo: [],
    isLoaded: true,
    error: false,
    pageInfo: [],
    photo: [],
    pagesCount: 0,
    counter: [],
    currentPage: 0
    };
    this.changePage = this.changePage.bind(this);   

  }

  componentDidMount() {
    this.makeQuery(this.state.pagesCount);   
  }	
  
  currentState(load, data, error){
    return this.setState({
    isLoaded: load,
    data: data,
    error: error    
    }) 
  } 

  makeQuery(idPage){
    let slug = this.props.slug;
    let posts = this.props.posts;


    if(posts){


    const { ApplicationService } = this.props;
    ApplicationService.getPostsInfo(slug).then((data) => {
    const slidesList= data[0].custom_fields.slider[0]
    if(slidesList){


let galleryArray = QueryTransformer(slidesList, 9, idPage)



this.setState({
  pagesCount: galleryArray.pagesCount,
  counter: galleryArray.counter 
  })



  ApplicationService.getPhoto(galleryArray.galleryQuery).then((photo) => {

    this.setState({ 
      photo: photo,
      isLoaded: false,
      error: false 

      }) 


      });
  }


    this.setState({ 
    pageInfo: data[0]  
    })
     
      }).catch(()=>{
       
      });


    }else{

      const { ApplicationService } = this.props;
    ApplicationService.getPagesInfo(slug).then((data) => {
    const slidesList= data[0].custom_fields.slider[0]
    if(slidesList){
  
  let galleryArray = QueryTransformer(slidesList)

  ApplicationService.getPhoto(galleryArray.galleryQuery).then((photo) => {
    this.setState({ 
      photo: photo,
      isLoaded: false,
      error: false 

      }) 
      });
  }


    this.setState({ 
    pageInfo: data[0]  
    })
     
      }).catch(()=>{
       
      });

    }   

  


  } 

  changePage = (id) => {
    this.setState({ 
    currentPage: id  
    })
    this.makeQuery(id);  
    }

 
          
  render(){
    let { data, isLoaded, error, pageInfo, photo, pagesCount, counter, currentPage} = this.state;

    let post = this.props.posts;
    const successData = !(isLoaded || error);
    const errorBlock = error ? <Error/> : null 
    const loader = isLoaded ? <div className="load"></div> : null 
    const content = successData ? post ? <GalleryInfo gallery={photo} pageInfo={pageInfo} pagesCount={pagesCount} counter={counter} pageValue={this.changePage} current={currentPage} /> : 
    <SliderPhotogalleryInfo gallery={photo} pageInfo={pageInfo} /> : null
    return(
    <div>
    {errorBlock}  
    {loader}
    {content}
    </div>
    )     
  }    

}

const mapStateProps = ({photogalleryReducer}) => {
    return{
    reduxState: photogalleryReducer
    } 
    }
    const mapDispatchProps = (dispatch) =>{  
    return {
    reciveData: bindActionCreators (reciveData, dispatch),
    errorData: bindActionCreators (errorData, dispatch)   
      }
    }
    
export default wrapContainer()(connect(mapStateProps, mapDispatchProps)(SliderPhotogallery))