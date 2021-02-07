import React, { Component } from 'react'
import Parser from 'html-react-parser';
import MetaTags from 'react-meta-tags';

import './PagesWrap.scss';
import Articles from '../../containers/articles/Articles.js';

import Breadcrumbs from '../../components/templates/breadcrumbs/Breadcrumbs';

import ScrollAnimation from 'react-animate-on-scroll';

export default class CategoryInfo extends Component {


  
  render(){
let pagesInfo = this.props.pages[0];
let title = this.props.pages[0].name; 
let pageId = pagesInfo.id; 


let breadcrumbs1
let breadcrumbs1Url
let breadcrumbsArray = {}
  breadcrumbs1 = ''
  breadcrumbs1Url = ''


breadcrumbsArray = {
  breadcrumbs1: breadcrumbs1,
  breadcrumbs1Url: breadcrumbs1Url
}






    return(  
      <div className="load-padding">
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={0} duration={2} animateOnce={true}>      
    <div className="category container-block">
     

    <Breadcrumbs mainHref={`https://${window.location.host}`} breadcrumbsArray={breadcrumbsArray}  targetTitle={title} />

  <div className="category__title"><h1>{Parser(String(pagesInfo.name))}</h1></div>

<Articles id={pagesInfo.id}/>
  <div className="category__content">{Parser(String(pagesInfo.description))}</div>




    </div>
    </ScrollAnimation>
    </div>
          )     
  }    
}