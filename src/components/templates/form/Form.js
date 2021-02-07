import React, { Component } from 'react'
import InputMask from 'react-input-mask';
import TimePicker from 'react-time-picker';
import DatePicker, { registerLocale } from "react-datepicker";
import uk from "date-fns/locale/uk";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";


import './Form.scss';

export default class Form extends Component {

  constructor() {
    super();
    this.state = {
    changeDate: false,  
    date: new Date(),
    time: '',
    locale: 'ru'
    };
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount(){
    let pathName = window.location.pathname;
    let pathLang = pathName.substr(0, 4) 
    if(pathLang == '/ru/'){
      registerLocale("ru", ru);
      this.setState({
        locale: 'ru'
        });
    }else if(pathLang == '/en/')
    this.setState({
      locale: ''
      });
    else{
      registerLocale("uk", uk);
      this.setState({
        locale: 'uk'
        });
    
    } 
  }
  
  valueInputs(operation){
    let name = '';
    let nameOn = false;
    if(this.name){
    name = this.name.value;
    nameOn = true;
    }else{
    name = '';
    nameOn = false;
    }

    let surname = '';
    let surnameOn = false;
    if(this.surname){
    surname = this.surname.value;
    surnameOn = true;
    }else{
    surname = '';
    surnameOn = false;
    }

    let phone = '';
    let phoneOn = false;
    if(this.phone){
    phone = this.phone.value;
    phoneOn = true;
    }else{
    phone = '';
    phoneOn = false;
    }

    let email = '';
    let emailOn = false;
    if(this.email){
    email = this.email.value;
    emailOn = true;
    }else{
    email = '';
    emailOn = false;
    }

    let date = '';
    let dateOn = false;
    if(this.date){
    date = this.state.date;
    dateOn = true;
    }else{
    date = '';
    dateOn = false;
    }

    let time = '';
    let timeOn = false;
    if(this.time){
    time = this.state.time;
    timeOn = true;
    }else{
    time = '';
    timeOn = false;
    }

    let message = '';
    let messageOn = false;
    if(this.message){
    message = this.message.value;
    messageOn = true;
    }else{
    message = '';
    messageOn = false;
    }
  
    let valueObject = {}
    if(operation == 'send'){
    return valueObject = {
    name: name, 
    surname: surname, 
    phone: phone, 
    email: email, 
    date: date,
    dateOn: dateOn,
    time: time,
    message: message, 
    title: this.props.formValues.formTitle,
    url: window.location.href  
    } 
  }else{
    return valueObject = {
    name: name, 
    nameOn: nameOn,
    surname: surname, 
    surnameOn: surnameOn,
    phone: phone, 
    phoneOn: phoneOn,
    email: email, 
    emailOn: emailOn,
    date: date,
    dateOn: dateOn,
    time: time,
    timeOn: timeOn,
    message: message, 
    messageOn: messageOn
    } 
  }  

  }

  changeValue(type){ 
    let valuesObject = this.valueInputs('change');
    valuesObject.type = type;
    this.props.formValues.inputsValue(valuesObject);   
  }

  blurValue(type){
    let valuesObject = this.valueInputs('blur');
    valuesObject.type = type; 
    this.props.formValues.inputsBlur(valuesObject);  
  }
  
  changeDate(date, type){
    this.setState({
    date: date,
    changeDate: true
    });
    let valuesObject = this.valueInputs('change');
    valuesObject.type = type; 
    this.props.formValues.inputsValue(valuesObject); 
  }

  changeTime(time){
    this.setState({
    time: time
    });
    let valuesObject = this.valueInputs('change');
    this.props.formValues.timeValue(valuesObject); 
  }
 
  blurTime(e){
    let valuesObject = this.valueInputs('blur');
    this.props.formValues.timeBlur(valuesObject);              
  }
                       
  submitForm(e){
    e.preventDefault();
    let currentDate = this.state.date;
    let dateFormated = ``;
    if(this.state.changeDate){
    dateFormated = `${currentDate.getMonth()}/${currentDate.getDate()}/${currentDate.getFullYear()}`; 
    }else{
    dateFormated = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`; 
    }
    let valuesObject = this.valueInputs('send');
    if(valuesObject.dateOn == true){
    valuesObject.date = dateFormated; 
    delete valuesObject.dateOn
    }else{
    valuesObject.date = '';  
    delete valuesObject.dateOn 
    }
    this.props.formValues.addQuestion(valuesObject);  
  }             

  render(){
    let formInputs = this.props.formValues.formInputs;
    let showInfo = this.props.formValues.showElement;
    let formTitle = this.props.formValues.formTitle;
    let words = this.props.formValues.words;

    
  
    let { date, time, locale } = this.state;
    if(formInputs.length > 1){
    return(
    <div className="contacts-form">
    <h2>{formTitle}</h2>
    <p id="success-send" className={showInfo}>{words.success}</p>     
    <form onSubmit={this.submitForm.bind(this)} encType='multipart/form-data'>
   
    { formInputs.map(input=> {  

   switch(input.name) {
   case 'Name':
   const name = input.name;  
   return <div className="form-group" key={input.id}>
    <p className={`error-message ${this.props.formValues.nameError}`}>{input.error}</p>
    <input ref={(name) => this.name = name } className="form-control" placeholder={input.title} name={input.name} onChange={this.changeValue.bind(this, name)} 
    onBlur={this.blurValue.bind(this, name)} type="text" value={this.props.formValues.nameValue} onFocus={() => this.name.placeholder = ''} />
    </div>
  case 'Surname':  
  const surname = input.name;
  return <div className="form-group" key={input.id}>
    <p className={`error-message ${this.props.formValues.surnameError}`}>{input.error}</p>  
    <input ref={(surname) => this.surname = surname } className="form-control" placeholder={input.title} name={input.name} onChange={this.changeValue.bind(this, surname)} 
    onBlur={this.blurValue.bind(this, surname)} type="text" value={this.props.formValues.surnameVal} onFocus={() => this.surname.placeholder = ''} />
    </div>
  case 'Phone':  
  const phone = input.name;
  return  <div className="form-group" key={input.id}>
    <p className={`error-message ${this.props.formValues.phoneError}`}>{input.error}</p>   
    <InputMask mask="+3\8 099 999 99 99" maskChar="-" ref={(phone) => this.phone = phone } className="form-control" placeholder={input.title} name={input.name} onChange={this.changeValue.bind(this, phone)} 
    onBlur={this.blurValue.bind(this, phone)} type="text" value={this.props.formValues.phoneVal}/>
    </div>
  case 'Email':  
  const email = 'Email';
  return  <div className="form-group" key={input.id}>
    <p className={`error-message ${this.props.formValues.emailError}`}>{input.error}</p>
    <p className={`error-message ${this.props.formValues.emailErrorSecond}`}>{input.error2}</p>
    <input ref={(email) => this.email = email } className="form-control" placeholder={input.title} 
    onChange={this.changeValue.bind(this, email)} onBlur={this.blurValue.bind(this, email)}  type="text" value={this.props.formValues.emailVal} onFocus={() => this.email.placeholder = ''}/>
    </div>
  case 'Date':  
  const datevalue = input.name;
  return  <div className="form-group" key={input.id}>
    <DatePicker dateFormat='MM/dd/yyyy' ref={(date) => this.date = date } locale={locale} selected={date} onChange={this.changeDate.bind(this)}
    minDate={new Date()} />
    </div>
  case 'Time':  
  const timevalue = input.name;
  return  <div className="form-group" key={input.id}>
    <p className={`error-message ${this.props.formValues.timeError}`}>{input.error}</p>  
    <TimePicker ref={(time) => this.time = time } onChange={this.changeTime.bind(this)} value={time} onBlur={this.blurTime.bind(this, timevalue)} />
    </div>
  case 'Message': 
  const message = input.name; 
  return  <div className="form-group message-input" key={input.id}>
    <p className={`error-message ${this.props.formValues.messageError}`}>{input.error}</p>
    <textarea ref={(message) => this.message = message } className="form-control" placeholder={input.title}
    onChange={this.changeValue.bind(this, message)} onBlur={this.blurValue.bind(this, message)} type="text" value={this.props.formValues.messageVal} onFocus={() => this.message.placeholder = ''}>
    </textarea>
    </div> 
   
  }  
    
    })
    }

    <button className="btn btn-success" id="send-message" type="submit" disabled={this.props.formValues.sendButton} >{words.send}</button>
    </form>



    </div>
    )     
  }else{
    return(
    <div className="contacts-form"></div>
    )
  } 

}  
}

