import React, { Component } from 'react'
import Parser from 'html-react-parser';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './SliderPhotogallery.scss';

export default class SliderPhotogalleryInfo extends Component {






  
  render(){

    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };




function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "#399bc0" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "#399bc0" }}
      onClick={onClick}
    />
  );
}





const galleryInfo = this.props.gallery;
const pageInfo = this.props.pageInfo;

return(    
  <div className="slider-list carousel">

{
<Slider {...settings}>
{galleryInfo.map(gallery => {
  return            <div key={gallery.id}>
<img src={gallery.source_url ? gallery.source_url : ''} alt={gallery.alt_text ? gallery.alt_text : ''}/>  
              </div>
}) 
}              
          </Slider>
}




  </div>
        )  
        
        


  }    
}