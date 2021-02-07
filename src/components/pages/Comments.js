import React, { Component } from 'react'

export default class Comments extends Component {

  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
  }
  
  valueInputs(operation){
    let valueObject = {}
    if(operation == 'send'){
    return valueObject = {
    name: this.name.value, 
    email: this.email.value, 
    comment: this.comment.value,
    commentId: this.props.formValues.commentId  
    } 
  }else{
    return valueObject = {
    name: this.name.value, 
    email: this.email.value, 
    comment: this.comment.value,
    commentId: this.props.formValues.commentId  
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
  

                       
  submitForm(e){
    e.preventDefault();
    let valuesObject = this.valueInputs('send');
    this.props.formValues.addQuestion(valuesObject);  
  }             

  render(){
    /*
    let formInputs = this.props.formValues.formInputs;
    let showInfo = this.props.formValues.showElement;
    let formTitle = this.props.formValues.formTitle;
    let words = this.props.formValues.words;
    */
let name = "Name";
let email = "Email";
let comment = "Comment";

   let formInputs = this.props.formValues.formInputs;
    let showInfo = this.props.formValues.showElement;
    let formTitle = this.props.formValues.formTitle;
    let words = this.props.formValues.words;
    let targetCommentId = this.props.formValues.commentId
    let commentTitle
    let commentSuccess
    targetCommentId == 0 ? commentTitle = words.commentTitle : commentTitle = words.commentTitleAnswer
    targetCommentId == 0 ? commentSuccess = words.commentSuccess : commentSuccess = words.commentSuccessAnswer   
    return(
    <div className="contacts-form">
    
    <h2>{commentTitle}</h2>
    <p id="success-send" className={showInfo}>{commentSuccess}</p>   

    <form onSubmit={this.submitForm.bind(this)} encType='multipart/form-data'>
   
    

  <div className="form-group">
    <p className={`error-message ${this.props.formValues.nameError}`}>{words.commentNameEmpty}</p>
    <input ref={(name) => this.name = name } className="form-control" placeholder={words.commentPlaceholderName} name={words.commentPlaceholderName} onChange={this.changeValue.bind(this, name)} 
    onBlur={this.blurValue.bind(this, name)} type="text" value={this.props.formValues.nameValue} onFocus={() => this.name.placeholder = ''} />
    </div>
 <div className="form-group">
    <p className={`error-message ${this.props.formValues.emailError}`}>{words.commentEmailEmpty}</p>
    <p className={`error-message ${this.props.formValues.emailErrorSecond}`}>{words.commentEmailError}</p>
    <input ref={(email) => this.email = email } className="form-control" placeholder={words.commentPlaceholderEmail}
    onChange={this.changeValue.bind(this, email)} onBlur={this.blurValue.bind(this, email)}  type="text" value={this.props.formValues.emailVal} onFocus={() => this.email.placeholder = ''}/>
    </div>
 <div className="form-group comment-input">
    <p className={`error-message ${this.props.formValues.commentError}`}>{words.commentMessageEmpty}</p>
    <textarea ref={(comment) => this.comment = comment } className="form-control" placeholder={words.commentPlaceholderMessage}
    onChange={this.changeValue.bind(this, comment)} onBlur={this.blurValue.bind(this, comment)} type="text" value={this.props.formValues.commentVal} onFocus={() => this.comment.placeholder = ''}>
    </textarea>
    </div> 

    <button className="btn btn-success" id="send-message" type="submit" disabled={this.props.formValues.sendButton} >{words.commentSand}</button>
    </form>



    </div>
    )     
 

}  
}

