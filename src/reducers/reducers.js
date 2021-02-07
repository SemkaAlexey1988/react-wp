import { combineReducers } from 'redux'


import contactsReducer from './contacts.js'
import pagesReducer from './pages.js'
import commentsReducer from './comments.js'
import contactsFormReducer from './contactsForm.js'
import mainReducer from './mainPage.js'
import articlesReducer from './articles.js'
import photogalleryReducer from './photogallery.js'



const applicationReducer = combineReducers(
{
	contactsReducer,
	contactsFormReducer,
	mainReducer,
	pagesReducer,
	commentsReducer,
	articlesReducer,
	photogalleryReducer
}
)


export default applicationReducer