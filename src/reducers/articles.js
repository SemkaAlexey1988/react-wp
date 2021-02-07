 import constants from '../keymirror/index.js'

const initialState = {
    data: [],
    load: true,
    error: false  
};
  
const articlesReducer = (state = initialState, action) => {
    switch(action.type){ 
    case constants.FETCH_ARTICLES_SUCCESS:
    return {
    data: action.payload,   
    load: false,
    error: false 
    }
    case constants.FETCH_ARTICLES_ERROR:
    return {
    data: [],   
    load: false,
    error: true
    }
    default: return state
    }	
}
    
  export default articlesReducer