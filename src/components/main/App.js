import React, { Component } from 'react'
import Parser from 'html-react-parser';

import ScrollAnimation from 'react-animate-on-scroll';

import './App.scss';

export default class App extends Component {


  
  render(){
const mainInfo = this.props.main;

    return(    
    <div className="page-info">


{mainInfo.map(main => {
return <div key={main.id}>
  <ScrollAnimation animateIn='flipInX' delay={1} >
  <h1>{Parser(String(main.title.rendered))}</h1>
  </ScrollAnimation>
  <ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft' duration={2}>
  <div>{Parser(String(main.content.rendered))}</div>
  </ScrollAnimation>
</div>
})

  }


    </div>
          )     
  }    
}