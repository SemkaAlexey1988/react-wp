import React, { Component } from 'react'

import MainContent from '../../containers/main/MainContent';
import WidgetContent from '../../containers/widgets/WidgetContent';
import MenuContent from '../../containers/templates/menu/MenuContent';
import SliderMain from '../../containers/templates/slider/SliderMain';

import ScrollAnimation from 'react-animate-on-scroll';
import './MainWrap.scss';

export default class MainWrap extends Component {

    constructor() {
        super();
        this.state = {
        videoWrap: true,    
        videoLoad: false,
        videoWrapRu: true,    
        videoLoadRu: false,
        videoWrapEn: true,    
        videoLoadEn: false,
        theposition: false,
        menuStatus: false
        };
      }


      componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
        document.addEventListener('mousedown', this.controlClick, false)
      }
      componentWillUnmount(){
        window.removeEventListener('scroll', this.listenToScroll) 
        document.removeEventListener('mousedown', this.controlClick, false)     
           } 
         listenToScroll = () => {
              
            this.setState({
              theposition: true
            })
          }

      showVideo = () => {
        this.setState((state) => {
        return{    
        videoLoad: !state.videoLoad, 
        videoWrap: !state.videoWrap 
        } 
        })  
        }   
      showVideoRu = () => {
        this.setState((state) => {
        return{    
        videoLoadRu: !state.videoLoadRu, 
        videoWrapRu: !state.videoWrapRu 
        } 
        })  
        }    
      showVideoEn = () => {
        this.setState((state) => {
        return{    
        videoLoadEn: !state.videoLoadEn, 
        videoWrapEn: !state.videoWrapEn 
        } 
        })  
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
let {videoLoad, videoWrap, videoLoadRu, videoWrapRu, videoLoadEn, videoWrapEn, menuStatus} = this.state

let showVideo
let showWrap
videoLoad ?  showVideo = <WidgetContent widgetName="load-video-uk" />  : showVideo =``
videoWrap ?  showWrap = <WidgetContent widgetName="wrap-video-uk" />  : showWrap =``

let showVideoRu
let showWrapRu
videoLoadRu ?  showVideoRu = <WidgetContent widgetName="load-video" />  : showVideoRu =``
videoWrapRu ?  showWrapRu = <WidgetContent widgetName="wrap-video" />  : showWrapRu =``

let showVideoEn
let showWrapEn
videoLoadEn ?  showVideoEn = <WidgetContent widgetName="load-video-en" />  : showVideoEn =``
videoWrapEn ?  showWrapEn = <WidgetContent widgetName="wrap-video-en" />  : showWrapEn =``

let mainUrl = window.location.pathname; 

if(this.state.theposition){


if(mainUrl == '/ru/main-page/'){
    let menuShow
    let pw = window.innerWidth
    if(pw > 1200){ 
    menuShow = <MenuContent id="1" title={false}/>
    }else{    
    if(menuStatus){  
    menuShow = <MenuContent id="1" title={false}/> 
    }else{
    menuShow = ''   
    }
}

return(
<div className="main">

 <div className="top-menu" ref={blockStatus => this.blockStatus = blockStatus}>  
 <span className="burger" onClick={this.showMenu.bind(this)}> <i className="fa fa-bars"></i> </span> 
 {menuShow}
</div>  
<div className="load-padding">
<ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={0} duration={2} animateOnce={true}>
        <SliderMain id="115" limit={8} /> 
        </ScrollAnimation>      
<ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={0} duration={2} animateOnce={true}>
<WidgetContent widgetName="mainBlock__first" />  
</ScrollAnimation> 
</div> 
<div className="container-block">
<div className="video-wrap" onClick={this.showVideo.bind(this)}>
        {showWrap}
        {showVideo}
</div>
</div>  
<MainContent id="2" />
<ScrollAnimation animateIn='fadeIn' offset={0} duration={2}>
<WidgetContent widgetName="mainBlock__second" /> 
</ScrollAnimation>
<WidgetContent widgetName="mainStyles" />

</div>
    ) 
}else if(mainUrl == '/en/main/'){
    let menuShow
    let pw = window.innerWidth
    if(pw > 1200){ 
    menuShow = <MenuContent id="30" title={false}/>
    }else{    
    if(menuStatus){  
    menuShow = <MenuContent id="30" title={false}/> 
    }else{
    menuShow = ''   
    }
}
    return(
    <div className="main">
     <div className="top-menu" ref={blockStatus => this.blockStatus = blockStatus}>  
     <span className="burger" onClick={this.showMenu.bind(this)}> <i className="fa fa-bars"></i> </span> 
     {menuShow}
    </div>  
    <div className="load-padding">
    <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={0} duration={2} animateOnce={true}>
        <SliderMain id="107" limit={8} /> 
        </ScrollAnimation>  
    <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={0} duration={2} animateOnce={true}>
    <WidgetContent widgetName="mainBlock__first-en" />  
    </ScrollAnimation> 
    </div> 
    <div className="container-block">
<div className="video-wrap" onClick={this.showVideoEn.bind(this)}>
        {showWrapEn}
        {showVideoEn}
</div>
</div> 
    <MainContent id="4" />
    <ScrollAnimation animateIn='fadeIn' offset={0} duration={2}>
    <WidgetContent widgetName="mainBlock__second-en" /> 
    </ScrollAnimation>
    <WidgetContent widgetName="mainStyles" />
    
    </div>
        ) 
    }
else{
    let menuShow
    let pw = window.innerWidth
    if(pw > 1200){ 
    menuShow = <MenuContent id="25" title={false}/>
    }else{    
    if(menuStatus){  
    menuShow = <MenuContent id="25" title={false}/> 
    }else{
    menuShow = ''   
    }
}   
    return(
        <div className="main">  
        <div className="top-menu" ref={blockStatus => this.blockStatus = blockStatus}>  
        <span className="burger" onClick={this.showMenu.bind(this)}> <i className="fa fa-bars"></i> </span> 
        {menuShow}
</div> 



        <div className="load-padding">

        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={0} duration={2} animateOnce={true}>
        <SliderMain id="115" limit={8} /> 
        </ScrollAnimation>  


        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={0} duration={2} animateOnce={true}>
        <WidgetContent widgetName="mainBlock__first-uk" /> 
        </ScrollAnimation>  
        </div>
        <div className="container-block">
<div className="video-wrap" onClick={this.showVideo.bind(this)}>
        {showWrap}
        {showVideo}
</div>
</div>
        <MainContent id="3" />
        <ScrollAnimation animateIn='fadeIn' offset={0} duration={2}>
        <WidgetContent widgetName="mainBlock__second-uk" /> 
        </ScrollAnimation>
        <WidgetContent widgetName="mainStyles" />
        
        </div>
                )
} 

}else{



    if(mainUrl == '/ru/main-page/'){
    let menuShow
    let pw = window.innerWidth
    if(pw > 1200){ 
    menuShow = <MenuContent id="1" title={false}/>
    }else{    
    if(menuStatus){  
    menuShow = <MenuContent id="1" title={false}/> 
    }else{
    menuShow = ''   
    }
}  

        return(
        <div className="main">
        
         <div className="top-menu" ref={blockStatus => this.blockStatus = blockStatus}>  
         <span className="burger" onClick={this.showMenu.bind(this)}> <i className="fa fa-bars"></i> </span>
         {menuShow}
        </div>  
        <div className="load-padding">
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={0} duration={2} animateOnce={true}>
                <SliderMain id="125" limit={8} /> 
                </ScrollAnimation>      
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={0} duration={2} animateOnce={true}>
        <WidgetContent widgetName="mainBlock__first" />  
        </ScrollAnimation> 
        </div> 
      
        
        </div>
            ) 
        }else if(mainUrl == '/en/main/'){
    let menuShow
    let pw = window.innerWidth
    if(pw > 1200){ 
    menuShow = <MenuContent id="30" title={false}/>
    }else{    
    if(menuStatus){  
    menuShow = <MenuContent id="30" title={false}/> 
    }else{
    menuShow = ''   
    }
} 
            return(
            <div className="main">
             <div className="top-menu" ref={blockStatus => this.blockStatus = blockStatus}>   
             <span className="burger" onClick={this.showMenu.bind(this)}> <i className="fa fa-bars"></i> </span>
             {menuShow} 
            </div>  
            <div className="load-padding">
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={0} duration={2} animateOnce={true}>
                <SliderMain id="107" limit={8} /> 
                </ScrollAnimation>  
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={0} duration={2} animateOnce={true}>
            <WidgetContent widgetName="mainBlock__first-en" />  
            </ScrollAnimation> 
            </div> 
    
            
            </div>
                ) 
            }
        else{
    let menuShow
    let pw = window.innerWidth
    if(pw > 1200){ 
    menuShow = <MenuContent id="25" title={false}/>
    }else{    
    if(menuStatus){  
    menuShow = <MenuContent id="25" title={false}/> 
    }else{
    menuShow = ''   
    }
}    
            return(
                <div className="main">  
                <div className="top-menu" ref={blockStatus => this.blockStatus = blockStatus}>  
                <span className="burger" onClick={this.showMenu.bind(this)}> <i className="fa fa-bars"></i> </span> 
                {menuShow}
        </div> 
        
        
        
                <div className="load-padding">
        
                <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={0} duration={2} animateOnce={true}>
                <SliderMain id="102" limit={8} /> 
                </ScrollAnimation>  
        
        
                <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={0} duration={2} animateOnce={true}>
                <WidgetContent widgetName="mainBlock__first-uk" /> 
                </ScrollAnimation>  
                </div>
         
                
                </div>
                        )
        } 


}



    }    

}

