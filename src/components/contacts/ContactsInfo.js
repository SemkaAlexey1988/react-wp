import React, { Component } from 'react'
import Parser from 'html-react-parser';
// import MetaTags from 'react-meta-tags';
//import { Link } from 'react-router-dom'; 
import Breadcrumbs from '../../components/templates/breadcrumbs/Breadcrumbs';
import './ContactsInfo.scss';
import ScrollAnimation from 'react-animate-on-scroll';

export default class ContactsInfo extends Component {

  render(){
const contactsInfo = this.props.contacts;
let title = this.props.contactsTitle; 

let breadcrumbs1
let breadcrumbs1Url
let breadcrumbs2
let breadcrumbs2Url
let breadcrumbsArray = []
if(contactsInfo[0].custom_fields.breadcrumbs1){
breadcrumbs1 = contactsInfo[0].custom_fields.breadcrumbs1[0]
}else{ 
breadcrumbs1 = ''
} 
if(contactsInfo[0].custom_fields.breadcrumbs1Url){
breadcrumbs1Url = contactsInfo[0].custom_fields.breadcrumbs1Url[0]
 }else{
breadcrumbs1Url = ''
 } 
if(contactsInfo[0].custom_fields.breadcrumbs2){
breadcrumbs2 = contactsInfo[0].custom_fields.breadcrumbs2[0] 
}else{
breadcrumbs2 = ''
} 
if(contactsInfo[0].custom_fields.breadcrumbs2Url){
breadcrumbs2Url = contactsInfo[0].custom_fields.breadcrumbs2Url[0]
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
    <div className="page-info">


<Breadcrumbs mainHref={`https://${window.location.host}`} breadcrumbsArray={breadcrumbsArray} targetTitle={Parser(String(title))} />    

{contactsInfo.map(contact => {
return <div key={contact.id} className="contacts-bl">
  <h2>{contact.title.rendered}</h2>
  <div>{Parser(String(contact.content.rendered))}</div>
</div>
})

  }


    </div>
    </ScrollAnimation>  
</div>
          )     
  }    
}

