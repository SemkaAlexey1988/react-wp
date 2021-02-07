 import constants from '../keymirror/index.js'

const initialState = {
    data: [],
    load: true,
    error: false  
};
  
const photogalleryReducer = (state = initialState, action) => {
    switch(action.type){ 
    case constants.FETCH_PHOTOGALLERY_SUCCESS:
    return {
    data: action.payload,   
    load: false,
    error: false 
    }
    case constants.FETCH_PHOTOGALLERY_ERROR:
    return {
    data: [],   
    load: false,
    error: true
    }
    default: return state
    }	
}
    
  export default photogalleryReducer