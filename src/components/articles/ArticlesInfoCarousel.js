import React, { Component } from 'react'
import Parser from 'html-react-parser';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Articles.scss';

export default class ArticlesInfoCarousel extends Component {
  
  render(){
  let slidesCount 
  let pageWidthValue = window.innerWidth
  pageWidthValue > 1000 ? slidesCount = 3 : pageWidthValue < 1000 && pageWidthValue > 600 ? slidesCount = 2 : slidesCount = 1  
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: slidesCount,
      slidesToScroll: slidesCount,
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




const articlesInfo = this.props.articles;
const articlesWords = this.props.words;

    return(    
    <div className="articles-list elements-wrapper carousel">

{
  <Slider {...settings}>
{articlesInfo.map(articles => {
    return            <div key={articles.id} className="elements__block">
<div className="elements__block-img">
                 <img src={articles.better_featured_image ? articles.better_featured_image.source_url : ''} alt={articles.better_featured_image ? articles.better_featured_image.alt_text : ''}/>  
                    <p className="articles-list__title"> {Parser(String(articles.title.rendered))}</p>
                    <div className="articles-list__content"><p>{articles.custom_fields.specialty[0] ? articles.custom_fields.specialty[0] : '' }</p></div>
                    </div>
<div className="elements__block-content">

<div className="articles-list__info">{Parser(String(articles.content.rendered))}</div>
</div>


                </div>
 }) 
}              
            </Slider>
}



  
    </div>
          )     
  }    
}