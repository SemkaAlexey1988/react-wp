import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reciveData } from '../../actions/pages/contacts.js'
import { errorData } from '../../actions/pages/contacts.js'

import ContactsInfo from '../../components/contacts/ContactsInfo';
import { wrapContainer } from '../../containers/wrap-containers';
import Loader from '../../components/templates/loader';
import Error from '../../components/templates/error';
import RouteTransformer from '../../utils/RouteTransformer';








class ContactsContent extends Component {
  constructor() {
    super();
    this.state = {
      titlePage: ''
    };

  }

  componentDidMount() {

  const { ApplicationService } = this.props;
  const slug = RouteTransformer(window.location.pathname);
  ApplicationService.getOneNews(slug).then((body) => {
    this.props.reciveData(body)    
     this.setState({
       titlePage: body[0].title.rendered  
     }) 
          }).catch(()=>{
      this.props.errorData()   
      }); 
   
      }	 
          
        


    render(){
      let {  titlePage } = this.state;
      const stateValue = this.props.reduxState
      const successData = !(stateValue.load || stateValue.error);
      const errorBlock = stateValue.error ? <Error/> : null 
      const loader = stateValue.load ? <div className="load"></div> : null 
      const content = successData ? <ContactsInfo contacts={stateValue.data} contactsTitle={titlePage}/> : null
      return( 
      <div>
      {errorBlock}  
      {loader}
      {content}
      </div>
      )     
      }    

}

const mapStateProps = ({contactsReducer}) => {
    return{
      reduxState: contactsReducer
    } 
    }
    const mapDispatchProps = (dispatch) =>{  
    return {
    reciveData: bindActionCreators (reciveData, dispatch),
    errorData: bindActionCreators (errorData, dispatch),
      }
    }
    
    export default wrapContainer()(connect(mapStateProps, mapDispatchProps)(ContactsContent))