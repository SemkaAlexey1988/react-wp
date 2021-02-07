import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { reciveData } from '../../actions/articles/articles'
import { errorData } from '../../actions/articles/articles'

import ArticlesInfo from '../../components/articles/ArticlesInfo';
import ArticlesInfoCarousel from '../../components/articles/ArticlesInfoCarousel';
import ArticlesInfoSlider from '../../components/articles/ArticlesInfoSlider';
import { wrapContainer } from '../../containers/wrap-containers';

import Loader from '../../components/templates/loader';
import Error from '../../components/templates/error';

import CurrentLang from '../../utils/CurrentLang';

class Articles extends Component {
  constructor() {
    super();
    this.state = {
    wordsList: [],
    limit: 8
    };

    this.itemsQuantityValue = this.itemsQuantityValue.bind(this);    

  }

  componentDidMount() {
    let url = this.props.id;
    const limit = this.state.limit
    this.getArticles(url, limit)
     
  }	

  getArticles(url, limit){

    let pathName = window.location.pathname;
    let pathLang = CurrentLang(pathName)
    let words;
    if(pathLang == '/ru/'){
    words = 'words';
    }else if(pathLang == '/en/'){
    words = 'words-en';
    }else{
    words = 'words-uk';
    } 
    
    const { ApplicationService } = this.props;
    ApplicationService.getArticlesInfo(url, limit).then((body) => {
     
    this.props.reciveData(body)  
   
    }).catch(()=>{
    this.props.errorData()     
    });

    ApplicationService.getWidgetWords(words).then((data) => {

      let wordsWidget3 = data.widgets[0].rendered;
      let wordsWidget2 = wordsWidget3.replace(/<div class="textwidget custom-html-widget">/g, ""); 
      let wordsWidget = wordsWidget2.replace("</div>", ""); 
      let wordsList = eval('({' + wordsWidget +  '})');

      this.setState({
        wordsList: wordsList   
        }) 
      },
      (error) => {
    //   console.log(error);
      }); 

  }
  


  itemsQuantityValue = (value) => {
this.setState({limit: value})
 let url = this.props.id;
 this.getArticles(url, value)
    }
  

 
          
  render(){
    let { wordsList, limit} = this.state;
    const moreItems = 4
    const urlCategory = this.props.id
    const stateValue = this.props.reduxState
    const successData = !(stateValue.load || stateValue.error);
    const errorBlock = stateValue.error ? <Error/> : null 
    const loader = stateValue.load ? <Loader/> : null 
    const content = successData ? urlCategory==22 || urlCategory==25 || urlCategory==27  ? <ArticlesInfoCarousel articles={stateValue.data} words={wordsList} /> : <ArticlesInfo articles={stateValue.data} words={wordsList} limit={limit} 
    more={moreItems} itemsQuentity={this.itemsQuantityValue} />  : null
    return(
    <div>
    {errorBlock}  
    {loader}
    {content}
    </div>
    )     
  }    

}

const mapStateProps = ({articlesReducer}) => {
    return{
    reduxState: articlesReducer
    } 
    }
    const mapDispatchProps = (dispatch) =>{  
    return {
    reciveData: bindActionCreators (reciveData, dispatch),
    errorData: bindActionCreators (errorData, dispatch)   
      }
    }
    
export default wrapContainer()(connect(mapStateProps, mapDispatchProps)(Articles))