import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { reciveData } from '../../actions/pages/pages.js'
import { errorData } from '../../actions/pages/pages.js'

import PagesInfo from '../../components/pages/PagesInfo';
import PostInfo from '../../components/pages/PostInfo';
import Reviews from '../../components/pages/Reviews';
import CategoryInfo from '../../components/pages/CategoryInfo';
import { wrapContainer } from '../../containers/wrap-containers';

import Error from '../../components/templates/error';

import RouteTransformer from '../../utils/RouteTransformer';


class PagesContent extends Component {
  constructor() {
    super();
    this.state = {
    type: '',
    slug: ''
    };

  }

  componentDidMount() {

    const slug = RouteTransformer(window.location.pathname);
    this.setState({slug:slug})

    const { ApplicationService } = this.props;
    ApplicationService.getPagesInfo(slug).then((body) => {
    if(body[0]){
    this.props.reciveData(body) 
    this.setState({ type: 'page' })  
    }else{
    ApplicationService.getCategoriesInfo(slug).then((info) => {  
    if(info[0]){
    this.props.reciveData(info) 
    this.setState({ type: 'category' })   
    }else{
    ApplicationService.getPostsInfo(slug).then((post) => {  
    if(post[0]){
    this.props.reciveData(post)
    this.setState({ type: 'post' })  
    }else{
    window.location.href = '/404-not-found/';
    }
    });
    } 
    }); 
           
/*
    let notFaund = '404-not-found';
    ApplicationService.getPagesInfo(notFaund).then((data) => {  
    this.props.reciveData(data)  
    const stateValue = this.props.reduxState 
    this.currentState(stateValue.load, stateValue.data, stateValue.error) 
    });
*/

    } 
    }).catch(()=>{
    this.props.errorData()    
    });
  }	
  
  

 
          
  render(){
    let {titlePage, type, slug } = this.state;
    const stateValue = this.props.reduxState
    const successData = !(stateValue.load || stateValue.error || type == '');
    const errorBlock = stateValue.error ? <Error/> : null 
    const loader = stateValue.load && type == '' ? <div className="load"></div> : null 
    const content = successData ? type == 'category' ? <CategoryInfo pages={stateValue.data} pagesTitle={titlePage}/> :
    type == 'post' ? slug == '/reviews/' ||  slug == '/reviews-2/' || slug == '/reviews-3/' ?  
    <Reviews post={stateValue.data} postTitle={titlePage}/> : 
    <PostInfo post={stateValue.data} postTitle={titlePage}/> :
    <div>
   <PagesInfo pages={stateValue.data} pagesTitle={titlePage} slug={slug}/>  
   </div>
    : null
    return(
    <div>
      
    {errorBlock}  
    {loader}
    {content}
    </div>
    )     
  }    

}

const mapStateProps = ({pagesReducer}) => {
    return{
    reduxState: pagesReducer
    } 
    }
    const mapDispatchProps = (dispatch) =>{  
    return {
    reciveData: bindActionCreators (reciveData, dispatch),
    errorData: bindActionCreators (errorData, dispatch)   
      }
    }
    
export default wrapContainer()(connect(mapStateProps, mapDispatchProps)(PagesContent))