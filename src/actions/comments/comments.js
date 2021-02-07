export const reciveData = (comments) => {
  return {
  type: 'FETCH_COMMENTS_SUCCESS',
  payload: comments
  }       
}

export const errorData = () => {
  return {
  type: 'FETCH_COMMENTS_ERROR'
  }      
}	
   
export const addData = (authorName, authorEmail, content, id, commentId) => {
  let sendResult = {
  author_name: authorName,
  author_email: authorEmail,
  content: {rendered: content},
  date: '',
  post: id,
  commentId: commentId
  }  
  return {
  type: 'FETCH_COMMENT_ADD',
  payload: sendResult
  }       
}   

   
  