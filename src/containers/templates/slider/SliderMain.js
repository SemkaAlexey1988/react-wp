import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { reciveData } from '../../../actions/pages/pages.js'
import { errorData } from '../../../actions/pages/pages.js'

import SliderMainInfo from '../../../components/templates/slider/SliderMainInfo';
import { wrapContainer } from '../../../containers/wrap-containers';

import Error from '../../../components/templates/error';



class SliderMain extends Component {
  constructor() {
    super();
    this.state = {
    data: [],
    isLoaded: true,
    error: false
    };

  }

  componentDidMount() {

    const slug = this.props.id;
    const limit = this.props.limit;
    

    const { ApplicationService } = this.props;
    ApplicationService.getArticlesInfo(slug, limit).then((body) => {
    this.props.reciveData(body)  
    const stateValue = this.props.reduxState 
    this.currentState(stateValue.load, stateValue.data, stateValue.error) 
   
    }).catch(()=>{
    this.props.errorData() 
    const stateValue = this.props.reduxState 
    this.currentState(stateValue.load, stateValue.data, stateValue.error)    
    });

  }	
  
  currentState(load, data, error, type){
    return this.setState({
    isLoaded: load,
    data: data,
    error: error,
    type: type     
    }) 
  } 

 
          
  render(){
    let { data, isLoaded, error } = this.state;
    const successData = !(isLoaded || error);
    const errorBlock = error ? <Error/> : null 
    const loader = isLoaded ? <div className="load"></div> : null 
    const content = successData ? <SliderMainInfo slides={data} /> : null
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
    
export default wrapContainer()(connect(mapStateProps, mapDispatchProps)(SliderMain))