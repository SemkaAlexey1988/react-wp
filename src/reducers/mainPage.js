import constants from '../keymirror/index.js'

const initialState = {
  load: true,
  data: [],
  error: false  
};

const mainReducer = (state = initialState, action) => {
    switch(action.type){ 
    case constants.FETCH_MAIN_SUCCESS:
    return {
    load: false,  
    data: action.payload,   
    error: false 
    }
    case constants.FETCH_MAIN_ERROR:
    return {
    load: false,  
    data: [],   
    error: true
    }
    default: return state
    }	
  }
  
export default mainReducer
