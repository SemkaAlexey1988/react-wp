import React, { Component } from 'react'

import ContactsContent from '../../containers/contacts/ContactsContent';
import ContactsForm from '../../containers/templates/form/ContactsForm';
import MenuContent from '../../containers/templates/menu/MenuContent';
import './ContactsInfo.scss';

import WidgetContent from '../../containers/widgets/WidgetContent';
import CurrentLang from '../../utils/CurrentLang';

export default class ContactsWrap extends Component {

    constructor() {
        super();
        this.state = {
        menuStatus: false
        };
      }

      componentDidMount() {
        document.addEventListener('mousedown', this.controlClick, false)
      }
      componentWillUnmount(){
        document.removeEventListener('mousedown', this.controlClick, false)     
           } 

           controlClick = (e) => {
            if(this.state.menuStatus){
        if(this.blockStatus.contains(e.target)){
            return;
        }
        this.setState((state) => {
            return{    
              menuStatus: !state.menuStatus 
            } 
            })
        }
            }  

        
        showMenu = () => {
            this.setState((state) => {
            return{    
            menuStatus: !state.menuStatus 
            } 
            })     
            }      

    render(){

let {menuStatus} = this.state

    let currentLanguage = window.location.pathname
    let pathLang = CurrentLang(currentLanguage)
    let menuId
    let widgetSecond
    let pageTitle
    if(pathLang == '/ru/'){
    menuId = '1'
    widgetSecond = 'widget-second-footer'
    pageTitle = 'Страница контактов'
    }else if(pathLang == '/en/'){
    menuId = '30'  
    widgetSecond = 'widget-second-footer-en' 
    pageTitle = 'Contacts page' 
    }else{
    menuId = '25'
    widgetSecond = 'widget-second-footer-uk' 
    pageTitle = 'Сторiнка контактiв'   
        }  
        let menuShow
        let pw = window.innerWidth
        if(pw > 1200){ 
        menuShow = <MenuContent id={menuId} title={false}/>
        }else{    
        if(menuStatus){  
        menuShow = <MenuContent id={menuId} title={false}/>
        }else{
        menuShow = ''   
        }
    }            
        return(
<div className="contacts-wrap page">
<div className="top-menu" ref={blockStatus => this.blockStatus = blockStatus}>   
<span className="burger" onClick={this.showMenu.bind(this)}> <i className="fa fa-bars"></i> </span> 
 {menuShow}
</div>  
<div className="page__title"><h1>{pageTitle}</h1></div>
<div className="contacts">
<div className="contacts__left">    
<ContactsContent />
</div>
<div className="contacts__right">  
<ContactsForm id="1" />
</div>
</div>
<div className="contacts__map">
<WidgetContent widgetName={widgetSecond}/> 
</div>
</div>
        )     
    }    

}

