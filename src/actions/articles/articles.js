export const reciveData = (articles) => {
    return {
    type: 'FETCH_ARTICLES_SUCCESS',
    payload: articles 
    }      
  }	
export const errorData = () => {
    return {
    type: 'FETCH_ARTICLES_ERROR'
    }      
  }	    
  