import React, { Component } from 'react'
import Parser from 'html-react-parser';
import { Link } from 'react-router-dom'; 



import './MenuInfo.scss';

export default class MenuInfo extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
    currentId: 0,
    currentChildId: 0,
    menuStatus: true,
    theposition: 0
    };
  } 
  toggleOver = (id) => { 
    this.setState({ 
    currentId: id
    });
  } 
  toggleOut = () => { 
    this.setState({ 
    currentId: 0
    });
  }

  toggleChildOver = (id) => { 
    this.setState({ 
    currentChildId: id
    });
  } 
  toggleChildOut = () => { 
    this.setState({ 
    currentChildId: 0
    });
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

 


  render(){

const menuInfo = this.props.menu;
const menuId = this.props.menuId;
const menuTitle = this.props.menuTitle;
const { currentId, currentChildId, menuStatus, theposition } = this.state;
let menuName;
this.props.statusTitle ? menuName=`<h3>${menuTitle}</h3>` : menuName=``  

let burger
menuId == 1  || menuId == 25 || menuId == 30  ? burger = '<i className="fa fa-bars"></i>' : burger = ''

let pw = window.innerWidth
if(pw < 1201 && menuId == 1 || pw < 1201 && menuId == 25 || pw < 1201 && menuId == 30){

  return(   
    <div className={`menu menu-${menuId}`} >
  {/* <span className="burger" onClick={this.showMenu.bind(this)}>{Parser(String(burger))}</span> */}
 <ul className="menu__ul" style={{display: menuStatus ? 'block' : 'none' }}>     
      { menuInfo.map(menu => { 
 if(menu.children){       
  return <li key={menu.id}><a href={menu.url} id={`menus_${menu.id}`}>{menu.title}</a>
  <ul className="sub-menu" className={currentId === menu.id  ? 'sub-menu show' : 'sub-menu' }>
 {menu.children.map(menuchild => {
   if(menuchild.children){
return <li key={menuchild.id} className={currentChildId === menuchild.id  ? 'toggle-button show' : 'toggle-button' }><a href={menuchild.url} id={`menus_${menu.id}`}>{menuchild.title}</a>

<ul className="sub-menu" className={currentChildId === menuchild.id  ? 'sub-menu show' : 'sub-menu' }>
{menuchild.children.map(menuchilds => {
return <li key={menuchilds.id}><a href={menuchilds.url} id={`menus_${menu.id}`}>{menuchilds.title}</a></li>
   })} 

   </ul>
  <span className={currentChildId === menuchild.id  ? 'fainput hide' : 'fainput' } onClick={this.toggleChildOver.bind(this, menuchild.id)}><i className="fa fa-plus" ></i></span>
 <span className={currentChildId === menuchild.id  ? 'fainput' : 'fainput hide' } onClick={this.toggleChildOut.bind(this)}><i className="fa fa-minus"  ></i></span>
    </li>
}else{
return <li key={menuchild.id}><a href={menuchild.url} id={`menus_${menu.id}`}>{menuchild.title}</a></li>
}
 })} 
 </ul>
 <span className={currentId === menu.id  ? 'fainput hide' : 'fainput' } onClick={this.toggleOver.bind(this, menu.id)}><i className="fa fa-plus" ></i></span>
 <span className={currentId === menu.id  ? 'fainput' : 'fainput hide' } onClick={this.toggleOut.bind(this)}><i className="fa fa-minus"  ></i></span>
  </li> 
 }else{
  return <li key={menu.id}><a href={menu.url} id={`menus_${menu.id}`}>{menu.title}</a></li>
 }      
})
  }
</ul>
    </div>
          );    

}else{

  return( 
<div className={`menu-wrap m${menuId} ${this.state.theposition > 120 ? 'scroll-menu': ''}`}>
{Parser(String(menuName))}
    <div className={`menu menu-${menuId}`} ref={blockStatus => this.blockStatus = blockStatus}>
 <ul className="menu__ul" id={`${menuId == 1  || menuId == 25 || menuId == 30 ? 'menu-main': ''}`}>     
      { menuInfo.map(menu => { 
 if(menu.children){       
  return <li key={menu.id} onMouseOut={this.toggleOut.bind(this)} onMouseOver={this.toggleOver.bind(this, menu.id)} className={currentId === menu.id  ? 'toggle-button show' : 'toggle-button' }><a href={menu.url} id={`menus_${menu.id}`}>{menu.title}</a>
  <ul className="sub-menu" className={currentId === menu.id  ? 'sub-menu show' : 'sub-menu' }>
 {menu.children.map(menuchild => {
   if(menuchild.children){
return <li key={menuchild.id} onMouseOut={this.toggleChildOut.bind(this)} onMouseOver={this.toggleChildOver.bind(this, menuchild.id)} className={currentChildId === menuchild.id  ? 'toggle-button show' : 'toggle-button' }><a href={menuchild.url} id={`menus_${menu.id}`}>{menuchild.title}</a>

<ul className="sub-menu" className={currentChildId === menuchild.id  ? 'sub-menu show' : 'sub-menu' }>
{menuchild.children.map(menuchilds => {
return <li key={menuchilds.id}><a href={menuchilds.url} id={`menus_${menu.id}`}>{menuchilds.title}</a></li>
   })} 

   </ul>
   
    </li>
}else{
return <li key={menuchild.id}><a href={menuchild.url} id={`menus_${menu.id}`}>{menuchild.title}</a></li>
}
 })} 
 </ul>
  </li> 
 }else{
  return <li key={menu.id}><a href={menu.url} id={`menu_${menu.id}`}>{menu.title}</a></li>
 }      
})
  }
</ul>
    </div>

</div>
          ); 

  
}          
          


  }    
}

