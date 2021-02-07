import constants from '../keymirror/index.js'

const initialState = {
  data: [],
  load: true,
  error: false  
};

const commentsReducer = (state = initialState, action) => {
  switch(action.type){
  case  constants.FETCH_COMMENTS_SUCCESS:
  let commentsArray = action.payload 
  let commentsMain
  let commentsAnswer
  let commentsMainFixed
  commentsMain = commentsArray.filter((comments) => { return comments.parent == 0})
  commentsAnswer = commentsArray.filter((comments) => { return comments.parent != 0})
  commentsMainFixed = commentsMain.map((comments) => { 
  comments.child = commentsAnswer.filter((comment) => { return comment.parent == comments.id })
  if(!comments.child[0]){ delete comments.child}
  return comments
  }) 


  return {
  ...state,  
  data: commentsMainFixed,   
  load: false,
  error: false 
  }
  case constants.FETCH_COMMENTS_ERROR:
  return {
  ...state,  
  data: [],   
  load: false,
  error: true
  }  
  case constants.FETCH_COMMENT_ADD: 
  let commentsAddValue
  let commentsData = state.data
  let commentsAdd = action.payload
  if(commentsAdd.commentId == 0){
  commentsAddValue = commentsData.concat(commentsAdd)  
  }else{
  commentsAddValue = commentsData.map((comments) => { 
  if(comments.id == commentsAdd.commentId){
  if(comments.child){  
  comments.child = comments.child.concat(commentsAdd)
  }else{
  comments.child = []
  comments.child = comments.child.concat(commentsAdd)  
  }  
  } 
  return comments
    })   
  }
  return {
  ...state,  
  data: commentsAddValue,   
  load: false,
  error: false 
  }   
  default: return state
  }
}

export default commentsReducer