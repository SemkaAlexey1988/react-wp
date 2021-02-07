
import Api from '../api/api.js'
let apiInfo = new Api();
const serverLink = apiInfo._serverLink; 
const appLink = window.location.hostname


export default class ApplicationService {

  
  async getResource(url){
    const res = await fetch(`${serverLink}${url}`);
    
  if(!res.ok){
  //  throw new Error(res.status)
  }
  return await res.json();
  } 
getOneNews(slug){ 
  return this.getResource(`/wp-json/wp/v2/pages?slug=${slug}`)
} 

getMainInfo(url){ 
  return this.getResource(`/wp-json/wp/v2/pages?slug=${url}`)
}
/*
getPagesInfo(slug){ 
  return this.getResource(`/wp-json/wp/v2/pages?slug=${slug}`)
} 
*/

getPagesInfo(slug){ 
  return this.getResource(`/wp-json/wp/v2/pages?slug=${slug}`)
} 

getPagesInfo(slug){ 
  return this.getResource(`/wp-json/wp/v2/pages?slug=${slug}`)
} 
getCategoriesInfo(slug){ 
  return this.getResource(`/wp-json/wp/v2/categories?slug=${slug}`)
} 
getPostsInfo(slug){ 
  return this.getResource(`/wp-json/wp/v2/posts?slug=${slug}`)
}

getArticlesInfo(url, limit){ 
 // console.log(`/wp-json/wp/v2/posts?categories=${url}&per_page=${limit}`)
  return this.getResource(`/wp-json/wp/v2/posts?categories=${url}&per_page=${limit}`)
}
getPhoto(photo){ 
  return this.getResource(`/wp-json/wp/v2/media/?${photo}`)
}

getComments(id){ 
  return this.getResource(`/wp-json/wp/v2/comments?post=${id}`)
}

getPhotoWidget(widget){ 
  return fetch(`${serverLink}/wp-json/wp-rest-api-sidebars/v1/sidebars/${widget}`, {
    headers: { 'Content-Type': 'application/json'}, 
    mode: 'cors'
    }).then(res => res.json())
}

getMenu(id){ 
  return this.getResource(`/wp-json/wp-api-menus/v2/menus/${id}`)
} 
getWidget(name){ 
  return this.getResource(`/wp-json/wp-rest-api-sidebars/v1/sidebars/${name}`);
}

getWidgetForm(widget){ 
  return this.getResource(`/wp-json/wp-rest-api-sidebars/v1/sidebars/${widget}`);
  }

getWidgetWords(words){ 
  return this.getResource(`/wp-json/wp-rest-api-sidebars/v1/sidebars/${words}`);
  }  

sendContactForm(userName, userSurname, userPhone, userEmail, userDate, userTime, userMessage, userTitle, userUrl){ 
  
    return fetch(`${serverLink}/wp-json/send-contact-form/v1/send-form`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
       body: JSON.stringify({
            "name": userName,
            "surname": userSurname,
            "phone": userPhone,
            "date": userDate,
            "time": userTime,
            "email": userEmail,
            "text": userMessage,
            "title": userTitle,
            "url": userUrl
          }),
      
      mode: 'cors'
      
      })
        .then(response => response)
        .then(json => { 
  
          }).catch((error) => {
         //   console.log(error);
          });   
  
}

sendCommentForm(authorName, authorEmail, content, id, parent){
  
    return fetch(`${serverLink}/wp-json/wp/v2/comments`, {
      headers: { 'Content-Type': 'application/json'},
      method: 'POST',
      
       body: JSON.stringify({
            "author_name": authorName,
            "author_email": authorEmail,
            "content": content,
            "post": id, 
            "parent": parent, 
          }),
      
      mode: 'cors'
      
      })
        .then(response => response)
        .then(json => { 
       //   console.log('yes')
          }).catch((error) => {
       //     console.log(error);
          });   
  
}





}
