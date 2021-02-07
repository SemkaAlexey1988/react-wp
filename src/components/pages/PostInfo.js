import React, { Component } from 'react'
import Parser from 'html-react-parser';

import CommentsForm from '../../containers/pages/CommentsForm';

import SliderPhotogallery from '../../containers/templates/slider/SliderPhotogallery';

import Breadcrumbs from '../../components/templates/breadcrumbs/Breadcrumbs';

import './PagesWrap.scss';

import ScrollAnimation from 'react-animate-on-scroll';

export default class PostInfo extends Component {


  
  render(){
const postInfo = this.props.post;
let title = postInfo[0].title.rendered; 
let postId = postInfo[0].id; 
let postCategory = postInfo[0].categories[0];
let slug = postInfo[0].slug;
let showGallery
let showCalendar
let posts = true
if(postCategory == '15' || postCategory == '60' || postCategory == '200'){
showCalendar = '' 
showGallery = <div className="container-block form-block"><SliderPhotogallery slug={slug} posts={posts}/></div>
}else{
showGallery = ''
showCalendar = <i className="fa fa-calendar"></i> 
}


let breadcrumbs1
let breadcrumbs1Url
let breadcrumbs2
let breadcrumbs2Url
let breadcrumbsArray = []
if(postInfo[0].custom_fields.breadcrumbs1){
breadcrumbs1 = postInfo[0].custom_fields.breadcrumbs1[0]
}else{ 
breadcrumbs1 = ''
} 
if(postInfo[0].custom_fields.breadcrumbs1Url){
breadcrumbs1Url = postInfo[0].custom_fields.breadcrumbs1Url[0]
 }else{
breadcrumbs1Url = ''
 } 
if(postInfo[0].custom_fields.breadcrumbs2){
breadcrumbs2 = postInfo[0].custom_fields.breadcrumbs2[0] 
}else{
breadcrumbs2 = ''
} 
if(postInfo[0].custom_fields.breadcrumbs2Url){
breadcrumbs2Url = postInfo[0].custom_fields.breadcrumbs2Url[0]
}else{
breadcrumbs2Url = '' 
}
breadcrumbsArray = {
  breadcrumbs1: breadcrumbs1,
  breadcrumbs1Url: breadcrumbs1Url,
  breadcrumbs2: breadcrumbs2,
  breadcrumbs2Url: breadcrumbs2Url
}


    return(    
      <div className="load-padding">
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' offset={0} duration={2} animateOnce={true}>   
    <div className="post-info container-block">


{postInfo.map(post => {
return <div key={post.id}>

<Breadcrumbs mainHref={`https://${window.location.host}`} breadcrumbsArray={breadcrumbsArray} targetTitle={Parser(String(title))} />

  <div className="post__title"><h1>{Parser(String(post.title.rendered))}</h1></div>
  {showCalendar} <span className="post__date">{postCategory == '20' || postCategory == '70' ? '' :`${post.date.substr(0, 10)}`}</span>
  {/*<div className="post__image"><img src={post.better_featured_image ? post.better_featured_image.source_url : ''} alt={post.better_featured_image ? post.better_featured_image.alt_text : ''}/></div> */}
  <div className="post__content">{Parser(String(post.content.rendered))}</div>
</div>
})

  }
{showGallery}

<CommentsForm id={postId} />



    </div>
    </ScrollAnimation>
    </div>
          )     
  }    
}