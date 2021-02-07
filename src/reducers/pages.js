 import constants from '../keymirror/index.js'

const initialState = {
    data: [],
    load: true,
    error: false  
};
  
const pagesReducer = (state = initialState, action) => {
    switch(action.type){ 
    case constants.FETCH_PAGES_SUCCESS:
    return {
    data: action.payload,   
    load: false,
    error: false 
    }
    case constants.FETCH_PAGES_ERROR:
    return {
    data: [],   
    load: false,
    error: true
    }
    default: return state
    }	
}
    
  export default pagesReducer