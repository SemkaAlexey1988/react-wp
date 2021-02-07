import React, { Component } from 'react'
import Parser from 'html-react-parser';

import './Articles.scss';

export default class ArticlesInfo extends Component {


changeQuantity = (limitItems) => { 
  const newLimit = limitItems + this.props.more 
  this.props.itemsQuentity(newLimit);
  } 
  

  render(){
const articlesInfo = this.props.articles;
const articlesWords = this.props.words;
const limitItems = this.props.limit;

    return(    
    <div className="articles-list">

{articlesInfo.map(articles => {
let excerpt = articles.content.rendered.substr(0, 100);
let exceptDecorated = excerpt.length > 1 ? `${excerpt}...` : ``;  
let date = articles.date.substr(0, 10);  
return <div key={articles.id} className="articles__item">
<div className="articles__left">
  <a href={articles.link}><img src={articles.better_featured_image ? articles.better_featured_image.source_url : ''} alt={articles.better_featured_image ? articles.better_featured_image.alt_text : ''}/></a>
</div> 
<div className="articles__right">
<div className="articles__title"><h2><a href={articles.link}>{Parser(String(articles.title.rendered))}</a></h2></div>
<span className="articles__date">{date}</span>
  <div className="articles__content">{Parser(String(exceptDecorated))}</div>
  <a href={articles.link} className="articles__detail">{articlesWords.read}</a>
</div>

</div>
})

  }

  <div onClick={this.changeQuantity.bind(this, limitItems)} className={articlesInfo.length < limitItems ? `load-more hide` : `load-more`}>{articlesWords.more}</div>

    </div>
          )     
  }    
}