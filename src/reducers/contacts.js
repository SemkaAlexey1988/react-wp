import constants from '../keymirror/index.js'

const initialState = {
data: [],
load: true,
error: false
};
 
const contactsReducer = (state = initialState, action) => {
    switch(action.type){
    case constants.FETCH_CONTACTS_SUCCESS:
        return {
        ...state,  
        data: action.payload,   
        load: false,
        error: false 
        } 

    default: return state                 
    }

}



export default contactsReducer