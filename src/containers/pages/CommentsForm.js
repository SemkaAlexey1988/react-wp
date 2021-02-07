import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { reciveData } from '../../actions/comments/comments'
import { addData } from '../../actions/comments/comments'
import { errorData } from '../../actions/comments/comments'
import Comments from '../../components/pages/Comments';
import CommentsInfo from '../../components/pages/CommentsInfo';
import { wrapContainer } from '../../containers/wrap-containers';

import CurrentLang from '../../utils/CurrentLang';

import Error from '../../components/templates/error';

class CommentsForm extends Component {
  constructor() {
    super();
    this.state = { 
    nameInfo: '',
    emailInfo: '',
    commentInfo: '',
    nameError: 'hidden',
    emailError: 'hidden',
    emailErrorSecond: 'hidden',
    commentError: 'hidden',
    buttonStatus: true,
    showMessage: 'hidden',
    formArray: [],
    formTitle: '',
    wordsList: {},
    commentForm: [],
    postId: '',
    modalStatusComment: false,
    commentId: 0
    };

    this.sendForm = this.sendForm.bind(this);   
    this.changeInputsValue = this.changeInputsValue.bind(this); 
    this.blurInputsValue = this.blurInputsValue.bind(this); 
    this.commentAnswerPopup = this.commentAnswerPopup.bind(this); 
  }

  componentDidMount() {
    const { ApplicationService } = this.props;
    let postId = this.props.id
    this.setState({
    postId: postId
    }) 
    let pathName = window.location.pathname;
    let pathLang  = CurrentLang(pathName)
    let words;
    if(pathLang == '/ru/'){
    words = 'words';  
    }else if(pathLang == '/en/'){
    words = 'words-en';  
    }
    else{
    words = 'words-uk';
    } 
    
   if(postId == '100'){
    postId = '100'
   }else if(postId == '150'){
    postId = '150'
   }else{
    postId = '200'
   }

    ApplicationService.getComments(postId).then((info) => {
    this.props.reciveData(info)   
    }).catch(()=>{
    this.props.errorData() 
    });

    

  let idForm = this.props.id;
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
   //console.log(error);
  }); 

  document.addEventListener('mousedown', this.controlClick, false);  


}



  changeInputsValue = (value) => {
    let inputsStatus = false;   
    if(value.name !=='' && value.email !=='' && value.comment !==''){
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
    else if(value.type == 'Email') {
      let correctEmail = true;
      this.setState({
      emailInfo: value.email
      }) 
      const patternEmail = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/i;    
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
    else if(value.type == 'Comment') { 
      this.setState({
      commentInfo: value.comment
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
      if(value.comment !==''){ 
      this.setState({
      commentError: 'hidden'
      }) 
      }else{
      this.setState({
      commentError: 'show'
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
    else if(value.type == 'Email') {
      let correctEmail = true;
      this.setState({
      emailInfo: value.email
      }) 
      const patternEmail = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/i;    
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
    else if(value.type == 'Comment') {
      this.setState({
      commentInfo: value.comment
      })  
      if(value.comment !==''){
      this.setState({
      commentError: 'hidden'
      })
      }else{
      this.setState({
      commentError: 'show'
      })
      } 
    }
    else{

    }  
  }

  commentAnswerPopup = (id) => {
    this.setState({
      commentId: id
      })
    this.setState((state) => {
      return{    
      modalStatusComment: !state.modalStatusComment 
      } 
      })  
  }  

  closeModal = () => {  
    this.setState((state) => {
    return{    
    modalStatusComment: !state.modalStatusComment 
    } 
        }) 
    this.setState({
    commentId: 0
    })        
  }

    

componentWillUnmount(){
document.removeEventListener('mousedown', this.controlClick, false);       
}
controlClick = (e) => {
if(this.state.modalStatusComment){
if(this.formStatus.contains(e.target)){
return;
}
this.setState((state) => {
return{    
modalStatusComment: !state.modalStatusComment
} 
})
this.setState({
  commentId: 0
  }) 
}
}
   

  sendForm = (value) => {
    const { ApplicationService } = this.props;
    ApplicationService.sendCommentForm(value.name, value.email, value.comment, this.state.postId, value.commentId).then((body) => {
    this.props.addData(value.name, value.email, value.comment, this.state.postId, value.commentId);
    this.setState({
      data: this.props.reduxState.data,
      showMessage: 'show',
      nameInfo: '',
      emailInfo: '',
      buttonStatus: true,
      commentInfo: ''
    });
    setTimeout(() => {
    this.setState({
      showMessage: 'hidden'
    });
    }, 4000);
    }); 


    
   
  }  
  render(){
    let { showMessage, nameInfo, emailInfo, commentInfo, buttonStatus,
    nameError, emailError, emailErrorSecond, commentError, formArray, formTitle, wordsList, modalStatusComment, commentId  } = this.state;
    let formData = {
      inputsValue: this.changeInputsValue,
      inputsBlur: this.blurInputsValue,
      addQuestion: this.sendForm,
      showElement: showMessage,
      nameVal: nameInfo,
      emailVal: emailInfo,    
      commentVal: commentInfo,   
      sendButton: buttonStatus,
      nameError: nameError,
      emailError: emailError,  
      emailErrorSecond: emailErrorSecond, 
      commentError: commentError,
      formInputs: formArray,
      formTitle: formTitle,
      words: wordsList, 
      commentId: commentId 
} 
const stateValue = this.props.reduxState
const successData = !(stateValue.load || stateValue.error);
const errorBlock = stateValue.error ? <Error/> : null 
const loader = stateValue.load ? <div className="load"></div> : null 
const content = successData ? <CommentsInfo comments={stateValue.data} commentId={this.commentAnswerPopup} words={wordsList}  /> : null  
let commentAnswer
modalStatusComment ? commentAnswer = <Comments formValues={formData} /> : commentAnswer = ''   

  return(
    <div>
    {errorBlock}   
    {loader}
    {content}  
    <Comments formValues={formData} />



<div className="modal-wrapper popup-1" style={{display: modalStatusComment ? 'block' : 'none' }}>
<div className="modal-table">
<div className="modal-table__cell">
<div className="modal-block" ref={formStatus => this.formStatus = formStatus}>
  <div className="close-modal" onClick={this.closeModal.bind(this)}>x</div>
  {commentAnswer}
</div></div></div></div>


    </div>

    )     
  }    
}
const mapStateProps = ({commentsReducer}) => {
  return{
  reduxState: commentsReducer
  } 
}
const mapDispatchProps = (dispatch) =>{  
  return {
  reciveData: bindActionCreators (reciveData, dispatch),
  errorData: bindActionCreators (errorData, dispatch),
  addData: bindActionCreators (addData, dispatch)
  }
}
    
export default wrapContainer()(connect(mapStateProps, mapDispatchProps)(CommentsForm))