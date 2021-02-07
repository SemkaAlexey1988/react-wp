import React, { Component } from 'react'
import Parser from 'html-react-parser';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import './Articles.scss';

export default class ArticlesInfoSlider extends Component {
  
  render(){
const articlesInfo = this.props.articles;
const articlesWords = this.props.words;
    return(    
    <div className="articles-list">

{
<Carousel>
{articlesInfo.map(articles => {
    return            <div key={articles.id}>
                    <a href={articles.link}><img src={articles.better_featured_image ? articles.better_featured_image.source_url : ''} alt={articles.better_featured_image ? articles.better_featured_image.alt_text : ''}/></a>
                    <p className="legend">{Parser(String(articles.title.rendered))}</p>
                </div>
 }) 
}              
            </Carousel>
}

    </div>
          )     
  }    
}