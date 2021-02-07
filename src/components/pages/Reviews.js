import React, { Component } from 'react'
import Parser from 'html-react-parser';
import MetaTags from 'react-meta-tags';

import CommentsForm from '../../containers/pages/CommentsForm';

import Breadcrumbs from '../../components/templates/breadcrumbs/Breadcrumbs';

import './PagesWrap.scss';

export default class Reviews extends Component {


  
  render(){
const postInfo = this.props.post;
let title = postInfo[0].title.rendered; 
let postId = postInfo[0].id; 


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
    <div className="reviews page-info">


{postInfo.map(post => {
return <div key={post.id}>

<div className="post__title page-title"><h1>{Parser(String(post.title.rendered))}</h1></div>
<div className="container-block">
<Breadcrumbs mainHref={`https://${window.location.host}`} breadcrumbsArray={breadcrumbsArray} targetTitle={Parser(String(title))} />

  <div className="post__content">{Parser(String(post.content.rendered))}</div>
  </div>
</div>
})

  }
<CommentsForm id={postId} />

    </div>
          )     
  }    
}