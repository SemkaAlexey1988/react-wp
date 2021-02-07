import React, { Component } from 'react'



import MenuInfo from '../../../components/templates/menu/MenuInfo';


import { wrapContainer } from '../../../containers/wrap-containers';









class MenuContent extends Component {
  constructor() {
    super();

    this.state = {
      menuInfo: [],
      isLoaded: false,
      menuId: 0,
      menuTitle: ''
    };

  }

  componentDidMount() {

    this.setState({
      menuInfo: [],
      isLoaded: false
   })

   let menuId = this.props.id;

   const { ApplicationService } = this.props;
   ApplicationService.getMenu(menuId).then((body) => {
   // this.props.reciveData(body.items)    
     this.setState({
       isLoaded: true,
       menuInfo: body.items,
       menuId: menuId,
       menuTitle: body.name
     }) 
          });
   
      }	 
          
          


    render(){
let { menuInfo, isLoaded, menuId, menuTitle } = this.state;
let statusTitle;
this.props.title ? statusTitle=true : statusTitle=false

 
        return(
          
          <div className="header__menu">
<MenuInfo menu={menuInfo} menuId={menuId} menuTitle={menuTitle} statusTitle={statusTitle} />
</div>

        )     
    }    

}


    
    export default wrapContainer()(MenuContent)