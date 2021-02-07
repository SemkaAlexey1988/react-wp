import React, { Component } from 'react'
import Parser from 'html-react-parser';
import './WidgetInfo.scss';



export default class WidgetInfo extends Component {


  
  render(){
const widgetInfo = this.props.widget;
const widgetName = this.props.widgetName;


    return(    
      <React.Fragment>
{widgetInfo.map((widget, index) => {
return <div key={index} className={`${widgetName}__${index}`}>
   {Parser(String(widget.rendered))}
    </div>
    })
    }
    </React.Fragment>
          )     
  }    
}