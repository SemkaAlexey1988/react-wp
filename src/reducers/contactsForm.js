 import constants from '../keymirror/index.js'



const initialState = [];
 

const contactsFormReducer = (state = initialState, action) => {
    switch(action.type){
        case constants.ADD_NEW_MESSAGE:
            return state.concat(action.payload);
        default: return state                 
        }

}

export default contactsFormReducer