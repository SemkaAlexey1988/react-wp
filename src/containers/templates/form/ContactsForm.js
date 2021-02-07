import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addNewMessage } from '../../../actions/pages/contacts.js'
import Form from '../../../components/templates/form/Form';
import { wrapContainer } from '../../../containers/wrap-containers';

class ContactsForm extends Component {
  constructor() {
    super();
    this.state = {
    nameInfo: '',
    surnameInfo: '',
    phoneInfo: '',
    emailInfo: '',
    timeInfo: '',
    messageInfo: '',
    nameError: 'hidden',
    surnameError: 'hidden',
    phoneError: 'hidden',
    emailError: 'hidden',
    emailErrorSecond: 'hidden',
    timeError: 'hidden',
    messageError: 'hidden',
    buttonStatus: true,
    showMessage: 'hidden',
    formArray: [],
    formTitle: '',
    wordsList: {}
    };

    this.sendForm = this.sendForm.bind(this);   
    this.changeInputsValue = this.changeInputsValue.bind(this); 
    this.changeTimeValue = this.changeTimeValue.bind(this); 
    this.blurTimeValue = this.blurTimeValue.bind(this); 
    this.blurInputsValue = this.blurInputsValue.bind(this); 
  }

  componentDidMount() {
    let pathName = window.location.pathname;
    let pathLang = pathName.substr(0, 4) 
    let widget;
    let words;
    if(pathLang == '/ru/'){
    widget = 'form'; 
    words = 'words';
    }else if(pathLang == '/en/'){
    widget = 'form-en'; 
    words = 'words-en';
    }else{
    widget = 'form-uk'; 
    words = 'words-uk';
    } 
    let idForm = this.props.id;
    const { ApplicationService } = this.props;
    ApplicationService.getWidgetForm(widget).then((body) => {
    let formWidget3 = body.widgets[idForm].rendered;
    let formWidget2 = formWidget3.replace(/<div class="textwidget custom-html-widget">/g, ""); 
    let formWidget = formWidget2.replace("</div>", ""); 
    let formList = formWidget.split('/');
    let formArray = []
    formList.forEach(function(item) {
    formArray.push(eval('({' + item +  '})'));
    });
   
    this.setState({
    formArray: formArray,
    formTitle: formArray[0].formtitle   
    })
/*    
sv.map(menu => {
console.log(menu.name);
})
*/

  },
  (error) => {
 //  console.log(error);
  }); 

ApplicationService.getWidgetWords(words).then((data) => {
  let wordsWidget3 = data.widgets[0].rendered;
  let wordsWidget2 = wordsWidget3.replace(/<div class="textwidget custom-html-widget">/g, ""); 
  let wordsWidget = wordsWidget2.replace("</div>", ""); 
  let wordsList = eval('({' + wordsWidget +  '})');
  this.setState({
    wordsList: wordsList   
    })

  },
  (error) => {
 //  console.log(error);
  }); 


}



  changeInputsValue = (value) => {
    let inputsStatus = false;   
    if(value.name !=='' || value.nameOn == false  && value.surname !=='' || value.surnameOn == false &&
    value.phone !=='' || value.phoneOn == false && value.email !=='' || value.emailOn == false && 
    value.time !=='' || value.timeOn == false && value.message !=='' || value.messageOn == false){
    inputsStatus = true;
    }else{
    inputsStatus = false;
    }
    if(value.type == 'Name'){
      this.setState({
      nameInfo: value.name
      })    
      if(inputsStatus){
      this.setState({
      buttonStatus: false
      })
      }else{
      this.setState({
      buttonStatus: true
      })
      }               
      if(value.name !==''){ 
      this.setState({
      nameError: 'hidden'
      }) 
      }else{
      this.setState({
      nameError: 'show'
      })
      }
    } 
    else if(value.type == 'Surname'){
      this.setState({
      surnameInfo: value.surname
      })    
      if(inputsStatus){
      this.setState({
      buttonStatus: false
      })
      }else{
      this.setState({
      buttonStatus: true
      })
      }               
      if(value.surname !==''){ 
      this.setState({
      surnameError: 'hidden'
      }) 
      }else{
      this.setState({
      surnameError: 'show'
      })
      }
    }
    else if(value.type == 'Phone'){
      let phoneStatus = false;
      if(value.phone.indexOf('-') === -1){
      phoneStatus = true;
      }else{
      phoneStatus = false;
      }
     
      this.setState({
      phoneInfo: value.phone
      })    
      if(inputsStatus && phoneStatus === true){
      this.setState({
      buttonStatus: false
      })
      }else{
      this.setState({
      buttonStatus: true
      })
      }               
      if(value.phone !==''){ 
      this.setState({
      phoneError: 'hidden'
      }) 
      }else{
      this.setState({
      phoneError: 'show'
      })
      }
    }
    else if(value.type == 'Email') {
      let correctEmail = true;
      this.setState({
      emailInfo: value.email
      }) 
      const patternEmail = /^[-._a-z0-9]+@(?:[-a-z0-9]+\.)+[a-z]{1,6}$/i;    
      if(patternEmail.test(value.email) === false){
      correctEmail = false;
      }else{
      correctEmail = true;
      } 
      if(inputsStatus && correctEmail === true){
      this.setState({
      buttonStatus: false
      })
      }else{
      this.setState({
      buttonStatus: true
      })
      } 
      if(correctEmail === true){ 
      this.setState({
      emailError: 'hidden'
      }) 
      }else{
      this.setState({
      emailError: 'hidden'
      })
      }
      if(value.email !==''){ 
      this.setState({
      emailErrorSecond: 'hidden'
      }) 
      }else{
      this.setState({
      emailErrorSecond: 'show'
      })
      } 
    }
    else if(value.type == 'Time') {
      this.setState({
        timeInfo: value.time
        })  
        if(inputsStatus){
        this.setState({
        buttonStatus: false
        })
        }else{
        this.setState({
        buttonStatus: true
        })
        } 
        if(value.time !==''){ 
        this.setState({
        timeError: 'hidden'
        }) 
        }else{
        this.setState({
        timeError: 'show'
        })
        } 
    }  
    else if(value.type == 'Message') { 
      this.setState({
      messageInfo: value.message
      })  
      if(inputsStatus){
      this.setState({
      buttonStatus: false
      })
      }else{
      this.setState({
      buttonStatus: true
      })
      } 
      if(value.message !==''){ 
      this.setState({
      messageError: 'hidden'
      }) 
      }else{
      this.setState({
      messageError: 'show'
      })
      }    
    }else{
    }
  }

  blurInputsValue = (value) => {
    if(value.type == 'Name'){
      this.setState({
      nameInfo: value.name
      })    
      if(value.name !==''){
      this.setState({
      nameError: 'hidden'
      })
      }else{
      this.setState({
      nameError: 'show'
      })
      }  
    }
    if(value.type == 'Surname'){
      this.setState({
      surnameInfo: value.surname
      })    
      if(value.surname !==''){
      this.setState({
      surnameError: 'hidden'
      })
      }else{
      this.setState({
      surnameError: 'show'
      })
      }  
    } 
    if(value.type == 'Phone'){
      let phoneStatus = false;
      if(value.phone.indexOf('-') === -1){
      phoneStatus = true;
      }else{
      phoneStatus = false;
      }

      this.setState({
      phoneInfo: value.phone
      })    
      if(value.phone !=='' &&  phoneStatus === true){
      this.setState({
      phoneError: 'hidden'
      })
      }else{
      this.setState({
      phoneError: 'show'
      })
      }  
    }
    else if(value.type == 'Email') {
      let correctEmail = true;
      this.setState({
      emailInfo: value.email
      }) 
      const patternEmail = /^[-._a-z0-9]+@(?:[-a-z0-9]+\.)+[a-z]{1,6}$/i;    
      if(patternEmail.test(value.email) === false){
      correctEmail = false;
      }else{
      correctEmail = true;
      } 
      if(correctEmail === true){
      this.setState({
      emailError: 'hidden'
      })
      }else{
      this.setState({
      emailError: 'show'
      })
      }  
      if(value.email !==''){
      this.setState({
      emailErrorSecond: 'hidden'
      })
      }else{
      this.setState({
      emailErrorSecond: 'show'
      })
      } 
    }
    else if(value.type == 'Message') {
      this.setState({
      messageInfo: value.message
      })  
      if(value.message !==''){
      this.setState({
      messageError: 'hidden'
      })
      }else{
      this.setState({
      messageError: 'show'
      })
      } 
    }
    else{

    }  
  }
  
  changeTimeValue = (value) => {
    let inputsStatus = false;   
    if(value.name !=='' || value.nameOn == false  && value.surname !=='' || value.surnameOn == false &&
    value.phone !=='' || value.phoneOn == false && value.email !=='' || value.emailOn == false && 
    value.time !=='' || value.timeOn == false && value.message !=='' || value.messageOn == false){
    inputsStatus = true;
    }else{
    inputsStatus = false;
    }
    this.setState({
    timeInfo: value.time
    })  
    if(inputsStatus){
    this.setState({
    buttonStatus: false
    })
    }else{
    this.setState({
    buttonStatus: true
    })
    } 
    if(value.time !==''){ 
    this.setState({
    timeError: 'hidden'
    }) 
    }else{
    this.setState({
    timeError: 'show'
    })
    } 
  }

  blurTimeValue = (value) => {
    this.setState({
      timeInfo: value.time
      })    
      if(value.time !==''){
      this.setState({
      timeError: 'hidden'
      })
      }else{
      this.setState({
      timeError: 'show'
      })
      } 
  }  
           
  
  

  sendForm = (value) => {
    const { ApplicationService } = this.props;

    ApplicationService.sendContactForm(value.name, value.surname, value.phone, value.email, value.date, value.time, value.message, value.title, value.url).then((body) => {
    this.props.addNewMessage(value.name, value.surname, value.phone, value.email, value.date, value.time, value.message);
    this.setState({
      contactsForm: this.props.contactsContentForm,
      showMessage: 'show',
      nameInfo: '',
      surnameInfo: '',
      phoneInfo: '',
      emailInfo: '',
      buttonStatus: true,
      messageInfo: ''
    });
    setTimeout(() => {
    this.setState({
      showMessage: 'hidden'
    });
    }, 4000);
    }); 
  }  
  render(){
    let { showMessage, nameInfo, surnameInfo, phoneInfo, emailInfo, timeInfo, messageInfo, buttonStatus,
    nameError, surnameError, phoneError, emailError, emailErrorSecond, timeError, messageError, formArray, formTitle, wordsList  } = this.state;
    let formData = {
      inputsValue: this.changeInputsValue,
      timeValue: this.changeTimeValue,
      inputsBlur: this.blurInputsValue,
      timeBlur: this.blurTimeValue,
      addQuestion: this.sendForm,
      showElement: showMessage,
      nameVal: nameInfo,
      surnameVal: surnameInfo,
      phoneVal: phoneInfo,
      emailVal: emailInfo,  
      timeVal: timeInfo,   
      messageVal: messageInfo,   
      sendButton: buttonStatus,
      nameError: nameError,
      surnameError: surnameError,
      phoneError: phoneError,
      emailError: emailError,  
      emailErrorSecond: emailErrorSecond, 
      timeError: timeError, 
      messageError: messageError,
      formInputs: formArray,
      formTitle: formTitle,
      words: wordsList  
} 
  return(
    <div>
    <Form formValues={formData} />
    </div>
    )     
  }    
}
const mapStateProps = (state) => {
  return{
  contactsContentForm: state.contactsFormReducer
  } 
}
const mapDispatchProps = (dispatch) =>{  
  return {
  addNewMessage: bindActionCreators (addNewMessage, dispatch)
  }
}
    
export default wrapContainer()(connect(mapStateProps, mapDispatchProps)(ContactsForm))