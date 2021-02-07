import React, { Component } from 'react'

import WidgetInfo from '../../components/widgets/WidgetInfo';

import { wrapContainer } from '../../containers/wrap-containers';

class WidgetContent extends Component {
  constructor() {
    super();

    this.state = {
      widgetInfo: [],
      isLoaded: false,
      widgetName: ''
    };

  }

  componentDidMount() {
    let widgetName = this.props.widgetName; 
  //  let widgetNumber = this.props.widgetNumber; 
    const { ApplicationService } = this.props;
   ApplicationService.getWidget(widgetName).then((body) => {
  //  this.props.reciveWidget(body.widgets[widgetNumber])   
  if(body[0]){ 
       this.setState({
         isLoaded: true,
         widgetInfo: body.widgets,
         widgetName: widgetName
       })
      }
   },
   (error) => {
    //console.log(error);
   }); 
      }	 
          
          


    render(){
let { widgetInfo, isLoaded, widgetName  } = this.state;
 
        return(
<WidgetInfo widget={widgetInfo} widgetName = {widgetName} />
        )     
    }    

}


    
    export default wrapContainer()(WidgetContent)