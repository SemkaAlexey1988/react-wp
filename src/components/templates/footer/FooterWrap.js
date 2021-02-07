import React, { Component } from 'react'
import './Footer.scss';
import MenuContent from '../../../containers/templates/menu/MenuContent';
import WidgetContent from '../../../containers/widgets/WidgetContent';

export default class FooterWrap extends Component {
  render(){
    let pathName = window.location.pathname;
    let pathLang = pathName.substr(0, 4) 
    let menuOne;
    let menuTwo;
    let menuThree;
    let menuFour;
    let widgetOneLeft;
    let widgetOne;
    let widgetTwo;
    if(pathLang == '/ru/'){
    menuOne = '10';
    menuTwo = '12';
    menuThree = '20';
    menuFour = '45';
    widgetOneLeft = 'widget-first-footer-left';
    widgetOne = 'widget-first-footer';
    widgetTwo = 'widget-second-footer';
    }else if(pathLang == '/en/'){
    menuOne = '55';
    menuTwo = '77';
    menuThree = '55';
    menuFour = '105';
    widgetOneLeft = 'widget-first-footer-left-en';
    widgetOne = 'widget-first-footer-en';
    widgetTwo = 'widget-second-footer-en';
    }else{
    menuOne = '56';
    menuTwo = '36';
    menuThree = '18';
    menuFour = '42';
    widgetOneLeft = 'widget-first-footer-left-uk';
    widgetOne = 'widget-first-footer-uk';
    widgetTwo = 'widget-second-footer-uk';
    }
    return(
      <footer className="site-footer">
     <div className="footer-top-menu">   
    { /* <MenuContent id={menuOne}/> */} 
     </div>
     <div className="footer-content"> 
     <div className="footer-top">
      <div className="bl-first footer-top_element"> 
     <WidgetContent widgetName={widgetOneLeft}/> 
     </div>
     <div className="bl-second footer-top_element"> 
     <MenuContent id={menuThree} title={true} /> 
     </div>
     <div className="bl-third footer-top_element"> 
     <MenuContent id={menuFour} title={true} /> 
     </div>
     <div className="bl-fourth footer-top_element"> 
     <MenuContent id={menuTwo} title={true}/>  
     </div>
     <div className="bl-fiveth footer-top_element"> 
     <WidgetContent widgetName={widgetOne}/> 
     </div>
     </div> 
      
     </div> 
      </footer>
      )     

    
  }    
}