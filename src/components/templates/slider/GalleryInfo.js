import React, { Component } from 'react'
import Parser from 'html-react-parser';
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";


import './Gallery.scss';

export default class GalleryInfo extends Component {




  changePage = (id) => { 

    this.props.pageValue(id);
  } 

  changePageFirst = (e) => { 
    this.props.pageValue(e.target.value);
  }
  changePageLast = (e) => { 

    this.props.pageValue(e.target.value);
  }

  
  render(){

const galleryInfo = this.props.gallery;
const page = this.props.pageInfo;
const pagesCount2 = this.props.pagesCount;
const pagesCount = pagesCount2 - 1;
const current = this.props.current;
const counter = this.props.counter;
const firstTitle = '<'
const firstValue = 0
const lastTitle = ">"

    return(  
      <div>  
 
    <div className="gallery container-block">

  


<SimpleReactLightbox>
  <SRLWrapper>

  {galleryInfo.map(gallery => {
  return <div key={gallery.id} className="gallery__element">
  <a href={gallery.source_url} data-attribute="SRL">
  <img src={gallery.source_url} alt={gallery.alt_text} />
  </a> 
  <p className="gallery__photo-title">{gallery.title.rendered}</p>
  </div>
})

  }  
   
    </SRLWrapper>
      </SimpleReactLightbox>   
<ul className="paginator">
<li id={firstValue} className="paginator__item first" onClick={this.changePageFirst.bind(this)}>{firstTitle}</li>
      {counter.map(page => {
  return <li key={page.id} className={page.id == current ? `paginator__item active` : `paginator__item`} onClick={this.changePage.bind(this, page.id)}>
{page.name}
  </li>
})
  }  
  {counter.map(page => {
    if(page.id == pagesCount){
  return <li key={page.id+1} className="paginator__item last" onClick={this.changePage.bind(this, page.id)}>
{lastTitle}
  </li>
    }
})
  } 
</ul>

    </div>




    </div>
          )     
  }    
}