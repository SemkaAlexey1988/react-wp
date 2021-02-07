//import constants from '../keymirror/index.js'
import Api from '../../api/api.js'

let apiInfo = new Api();
const eventsLink = apiInfo.eventsUrl; 
 
export const reciveData = (contacts) => {
  return {
  type: 'FETCH_CONTACTS_SUCCESS',
  payload: contacts
    }       
}	
  
export const errorData = () => {
  return {
  type: 'FETCH_CONTACTS_ERROR'
  }      
}	  

export const addNewMessage = (userName, userEmail, userMessage) => {
let sendResult = {
    name: userName,
    email: userEmail,
    message: userMessage
} 
return {
    type: 'ADD_NEW_MESSAGE',
    payload: sendResult
    } 
}   