

import React, { Component, Suspense } from 'react'
// import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom'; 
// import { render } from 'react-dom'
// import { Link } from 'react-router-dom'; 

import './Application.scss';
import HeaderWrap from './components/templates/header/HeaderWrap';
import FooterWrap from './components/templates/footer/FooterWrap';
import Totop from './components/templates/totop/Totop';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import store from './store/index.js'

import ApplicationService from './services/ApplicationService';
import { ApplicationServiceProvider} from './containers/application-service';


const Contactswrap = React.lazy(() => import('./components/contacts/ContactsWrap'));
const MainWrap = React.lazy(() => import('./components/main/MainWrap'));
const PagesWrap = React.lazy(() => import('./components/pages/PagesWrap'));




export default class Application extends Component {

  constructor() {
    super();
    this.state = {
    theposition: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.listenToScroll)      
       } 
    listenToScroll = () => {
        this.setState({
          theposition: true
        })
      }


  render(){ 

    let footerElements
    this.state.theposition ? footerElements = <React.Fragment><FooterWrap /> <Totop /> </React.Fragment> : footerElements = '' 

    const appService = new ApplicationService();
    return(
    <Provider store={store}>	
    <ApplicationServiceProvider value = {appService}>
    <BrowserRouter>
    <div className="site">
    <div className="content">
    <HeaderWrap />
   
    <Suspense fallback={<div></div>}>
   <Switch>
    <Route exact path='/' component={MainWrap}/>
    <Route exact path='/ru/main-page/' component={MainWrap}/>
    <Route exact path='/en/main/' component={MainWrap}/>
    <Route path='/ru/contacts/' component={Contactswrap}/>
    <Route path='/kontakty/' component={Contactswrap}/>
    <Route path='/en/contact-us/' component={Contactswrap}/>
    <Route path='/:id' component={PagesWrap}/>
    </Switch>
    </Suspense>
    
    </div>
    {footerElements}
    </div>
    </BrowserRouter>
	  </ApplicationServiceProvider>
	  </Provider>
    );	

    serviceWorker.unregister();
  } 
} 