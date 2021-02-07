import { createStore, applyMiddleware } from 'redux'
import  applicationReducer  from '../reducers/reducers.js'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';



const applicationStore = createStore(
		applicationReducer, composeWithDevTools(applyMiddleware(thunk))
)

export default applicationStore