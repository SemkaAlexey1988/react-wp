import React, { Component } from 'react'

import ContactsForm from '../../../containers/templates/form/ContactsForm';

export default class HeaderPopup extends Component {

    constructor() {
        super();
        
        this.state = {
            modalStatus: false,
            buttonTitle: ''
          }; 
            
    }
    componentDidMount() {
    let pathName = window.location.pathname;
    let pathLang = pathName.substr(0, 4) 
    if(pathLang == '/ru/'){
    this.setState({
    buttonTitle: 'Задать вопрос'
    })
   }else if(pathLang == '/en/'){
    this.setState({
    buttonTitle: 'Ask a Question'
    })   
   }else{
    this.setState({
    buttonTitle: 'Задати питання'
    })
    } 

  document.addEventListener('mousedown', this.controlClick, false);      
    }
    componentWillUnmount(){
 document.removeEventListener('mousedown', this.controlClick, false);       
    }
controlClick = (e) => {
    if(this.state.modalStatus){
if(this.formStatus.contains(e.target)){
    return;
}
this.setState((state) => {
    return{    
    modalStatus: !state.modalStatus 
    } 
    })
}
    }


showModal = (formStatus) => {
        this.setState((state) => {
        return{    
        modalStatus: !state.modalStatus 
        } 
        })     
        }
closeModal = () => {  
        this.setState((state) => {
        return{    
        modalStatus: !state.modalStatus 
        } 
            })    
            }
  
    

    render(){
 const { modalStatus, buttonTitle } = this.state 

let form
modalStatus ? form = <ContactsForm id="2" /> : form = '' 

        return(

<div className="header__popup">
<button id="popup-1" className="popup" onClick={this.showModal.bind(this)}>{buttonTitle}</button>
<div className="modal-wrapper popup-1" style={{display: modalStatus ? 'block' : 'none' }}>
<div className="modal-table">
<div className="modal-table__cell">
<div ref={formStatus => this.formStatus = formStatus} className="modal-block">
<div className="close-modal" onClick={this.closeModal.bind(this)}>x</div>
{form}
</div>
</div>
</div>
</div>
</div>
        )     
    }    

}

