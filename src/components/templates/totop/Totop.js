import React, { Component } from 'react'
import './Totop.scss';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class Totop extends Component {

  constructor(props) {
    super(props);
    this.state = {
    theposition: 0
    };
  }

  componentDidMount() {
  window.addEventListener('scroll', this.listenToScroll)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.listenToScroll)      
       } 

       listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
        
        this.setState({
          theposition: winScroll
        })
      }   


  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }




  render(){
 const row = '>';

    return(
<button className={this.state.theposition > 300 ? 'to-top show': 'to-top hide'}  onClick={() => scroll.scrollTo(0)}><span>{row}</span></button>
      )     

    
  }    
}