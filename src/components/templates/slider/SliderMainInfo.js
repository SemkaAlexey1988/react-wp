import React, { Component } from 'react'
import Parser from 'html-react-parser';
import Typist from 'react-typist';


import './SliderMain.scss';


import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default class SliderMainInfo extends Component {

  render(){

  let slides = this.props.slides  


 return(    
  <div className="slides">

{
<Carousel>
{slides.map(slide => {
  return            <div key={slide .id} className="slides__wrap">
<a href={slide .link}><img src={slide .better_featured_image ? slide .better_featured_image.source_url : ''} alt={slide .better_featured_image ? slide .better_featured_image.alt_text : ''}/></a>
<Typist> <p className="slides__title">{Parser(String(slide.title.rendered))}</p></Typist>
<p>{Parser(String(slide.content.rendered))}</p>
              </div>
}) 
}              
          </Carousel>
}

  </div>
        )   
        
        


  }    
}