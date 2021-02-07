import React, { Component } from 'react'
import Parser from 'html-react-parser';
import MetaTags from 'react-meta-tags';
import Breadcrumbs from '../../components/templates/breadcrumbs/Breadcrumbs';
import ContactsForm from '../../containers/templates/form/ContactsForm';
import CommentsForm from '../../containers/pages/CommentsForm';
import SliderPhotogallery from '../../containers/templates/slider/SliderPhotogallery';

import './PagesWrap.scss';

export default class PagesInfo extends Component {


  
  render(){
const pagesInfo = this.props.pages;
let title = pagesInfo[0].title.rendered; 
let pageId = pagesInfo[0].id; 
let slug =  this.props.slug;
let breadcrumbs1
let breadcrumbs1Url
let breadcrumbs2
let breadcrumbs2Url
let breadcrumbs3
let breadcrumbs3Url
let breadcrumbsArray = []
if(pagesInfo[0].custom_fields.breadcrumbs1){
breadcrumbs1 = pagesInfo[0].custom_fields.breadcrumbs1[0]
}else{ 
breadcrumbs1 = ''
} 
if(pagesInfo[0].custom_fields.breadcrumbs1Url){
breadcrumbs1Url = pagesInfo[0].custom_fields.breadcrumbs1Url[0]
 }else{
breadcrumbs1Url = ''
 } 
if(pagesInfo[0].custom_fields.breadcrumbs2){
breadcrumbs2 = pagesInfo[0].custom_fields.breadcrumbs2[0] 
}else{
breadcrumbs2 = ''
} 
if(pagesInfo[0].custom_fields.breadcrumbs2Url){
breadcrumbs2Url = pagesInfo[0].custom_fields.breadcrumbs2Url[0]
}else{
breadcrumbs2Url = '' 
}
if(pagesInfo[0].custom_fields.breadcrumbs3){
  breadcrumbs3 = pagesInfo[0].custom_fields.breadcrumbs3[0] 
  }else{
  breadcrumbs3 = ''
  } 
  if(pagesInfo[0].custom_fields.breadcrumbs3Url){
  breadcrumbs3Url = pagesInfo[0].custom_fields.breadcrumbs3Url[0]
  }else{
  breadcrumbs3Url = '' 
  }

breadcrumbsArray = {
  breadcrumbs1: breadcrumbs1,
  breadcrumbs1Url: breadcrumbs1Url,
  breadcrumbs2: breadcrumbs2,
  breadcrumbs2Url: breadcrumbs2Url,
  breadcrumbs3: breadcrumbs3,
  breadcrumbs3Url: breadcrumbs3Url
}



    return(    
    <div className="page-info">


{/*
<MetaTags>
    <title>{Parser(String(title))}</title>
    <meta name="description" content={`${Parser(String(title))} - page`} />
    <meta property="og:title" content={Parser(String(title))} />
    <meta property="og:image" content="" />
    </MetaTags> 
*/}



{pagesInfo.map(pages => {
return <div key={pages.id}>
  <div className="page-title"><h1>{Parser(String(pages.title.rendered))}</h1></div>
  <Breadcrumbs mainHref={`https://${window.location.host}`} breadcrumbsArray={breadcrumbsArray}  targetTitle={title}  />
  <div className="page-content">{Parser(String(pages.content.rendered))}</div>
</div>
})

  }
<div className="container-block form-block">
<SliderPhotogallery slug={slug} />  
</div>
<div className="container-block form-block">
<ContactsForm id="0" />
</div>
{ /*
<div className="container-block form-block">
<CommentsForm id={pageId} />
</div>
*/ }

    </div>
          )     
  }    
}