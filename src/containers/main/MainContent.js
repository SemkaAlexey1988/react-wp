import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { reciveData } from '../../actions/main/main.js'
import { errorData } from '../../actions/main/main.js'

import App from '../../components/main/App';
import { wrapContainer } from '../../containers/wrap-containers';

import Loader from '../../components/templates/loader';
import Error from '../../components/templates/error';

class MainContent extends Component {

  componentDidMount() {
   let mainLanguage = this.props.id;
   let url
   if(mainLanguage=='2'){
   url = 'main-page';  
   }else if(mainLanguage=='3'){
   url = 'main'; 
   }else{
   url = 'golovna';    
   }
   const { ApplicationService } = this.props;
    ApplicationService.getMainInfo(url).then((body) => { 
    this.props.reciveData(body)  

    }).catch(()=>{
    this.props.errorData()    
            });
   
  }      
          
  render(){
    const stateValue = this.props.reduxState
    const successData = !(stateValue.load || stateValue.error);
    const errorBlock = stateValue.error ? <Error/> : null 
    const loader = stateValue.load ? <Loader/> : null 
    const content = successData ? <App main={stateValue.data} /> : null
    return(
    <div>
    {errorBlock}  
    {loader}
    {content}
    </div>
    )     
    }    
}

  const mapStateProps = ({mainReducer}) => {
    return{
    reduxState: mainReducer
    } 
  }
  const mapDispatchProps = (dispatch) =>{  
    return {
    reciveData: bindActionCreators (reciveData, dispatch),
    errorData: bindActionCreators (errorData, dispatch)  
    }
  }
    
export default wrapContainer()(connect(mapStateProps, mapDispatchProps)(MainContent))