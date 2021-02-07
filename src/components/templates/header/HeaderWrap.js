import React, { Component } from 'react'
import './HeaderWrap.scss';
import HeaderPopup from './HeaderPopup';
//import MenuContent from '../../../containers/templates/menu/MenuContent';
import WidgetContent from '../../../containers/widgets/WidgetContent';
import Search from '../../../components/templates/search/Search';

export default class HeaderWrap extends Component {

    render(){
 //   let ruStorage = localStorage.getItem('ru-lang');
 //   let ukStorage = localStorage.getItem('uk-lang');
 //   let currentStorage = localStorage.getItem('current-lang');    
 let pathName = window.location.pathname;
 let pathLang = pathName.substr(0, 4) 
 let widget;
 let widgetLogo;
 let widgetButton;





 if(pathLang == '/ru/'){
 widget = 'header'; 
 widgetLogo = 'headerLogo';
 widgetButton = 'headerButton';
 }else if(pathLang == '/en/'){
widget = 'header-en'; 
widgetLogo = 'headerLogo-en';
widgetButton = 'headerButton-en';
 }else{
widget = 'header-uk'; 
widgetLogo = 'headerLogo-uk';
    widgetButton = 'headerButton-uk';
 } 

 let pw = window.innerWidth
 let lastWidget 
 if(pw > 1200){ 
lastWidget = <WidgetContent widgetName={widget} widgetNumber="0" />
 }else{
lastWidget = ''    
 }
        return(
<header className="site-header">         
<div className="header-wrapper">
<div className="header__logo"> 
<WidgetContent widgetName={widgetLogo} widgetNumber="0" />
</div>

<div className="header__4"> 
<HeaderPopup />
<div className="pay-button">
<WidgetContent widgetName={widgetButton} widgetNumber="0" />
</div>
{ /*
<ul>
<li><a href={ruStorage} >Русский</a></li>
<li><a href={ukStorage}>Українська</a></li>
</ul> */
    }
</div>


{lastWidget}

        {/*<MenuContent /> */}

<Search />
        
</div>
</header>   
        )     
    }    

}

