import React from 'react'
import Parser from 'html-react-parser';
import './Breadcrumbs.scss';

const Breadcrumbs = ({mainHref,  targetTitle, breadcrumbsArray}) =>{
 

    let pathName2 = window.location.pathname;
    let pathName = pathName2.substr(0, 4)
    let mainTitle;
    let mainHrefPrefix;
    switch (pathName) {
        case "/uk/":
        mainTitle = 'Головна'
        mainHrefPrefix = ''
          break;
        case "/ru/":
        mainTitle = 'Главная'
        mainHrefPrefix = '/ru/main-page/'
          break;
        case "/en/":
        mainTitle = 'Main'
        mainHrefPrefix = '/en/main/'
          break;
        default:
        mainTitle = 'Головна'
        mainHrefPrefix = ''
      }
      let breadcrumbsOne
      let breadcrumbsTwo 
      let breadcrumbsThree
      breadcrumbsArray.breadcrumbs1 ? breadcrumbsOne = `<li><a href="${breadcrumbsArray.breadcrumbs1Url}">${breadcrumbsArray.breadcrumbs1}</a></li><span>/</span>` : breadcrumbsOne = ''
      breadcrumbsArray.breadcrumbs2 ? breadcrumbsTwo = `<li><a href="${breadcrumbsArray.breadcrumbs2Url}">${breadcrumbsArray.breadcrumbs2}</a></li><span>/</span>` : breadcrumbsTwo = ''
      breadcrumbsArray.breadcrumbs3 ? breadcrumbsThree = `<li><a href="${breadcrumbsArray.breadcrumbs3Url}">${breadcrumbsArray.breadcrumbs3}</a></li><span>/</span>` : breadcrumbsThree = ''

    return(
        <div className="page-content">
<ul className="breadcrumbs">
<li><a href={`${mainHref}${mainHrefPrefix}`}>{mainTitle}</a></li>
<span>/</span>
{Parser(String(breadcrumbsOne))}
{Parser(String(breadcrumbsTwo))}
{Parser(String(breadcrumbsThree))}
<li>{targetTitle}</li>
        </ul>     
        </div>
    )
}


export default Breadcrumbs 

