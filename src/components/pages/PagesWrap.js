import React, { Component } from 'react'

import PagesContent from '../../containers/pages/PagesContent.js';
import WidgetContent from '../../containers/widgets/WidgetContent.js';
import MenuContent from '../../containers/templates/menu/MenuContent';
import './PagesWrap.scss';

import CurrentLang from '../../utils/CurrentLang';

import ScrollAnimation from 'react-animate-on-scroll';

export default class PagesWrap extends Component {

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
    let lang = CurrentLang(currentLanguage)
    let menuId
    if(lang == '/ru/'){
    menuId = '1'
    }else if(lang == '/en/'){
    menuId = '30'    
    }else{
    menuId = '25'     
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
            <div className="load-padding">
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={0} duration={2} animateOnce={true}>            
<div className="main">
 <div className="top-menu" ref={blockStatus => this.blockStatus = blockStatus}>   
 <span className="burger" onClick={this.showMenu.bind(this)}> <i className="fa fa-bars"></i> </span> 
 {menuShow}
</div>    
<PagesContent />
<WidgetContent widgetName="inner-styles" />
</div>
</ScrollAnimation>  
</div>
        )     
    }    

}

