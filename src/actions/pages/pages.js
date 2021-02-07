export const reciveData = (pages) => {
    return {
    type: 'FETCH_PAGES_SUCCESS',
    payload: pages 
    }      
  }	
export const errorData = () => {
    return {
    type: 'FETCH_PAGES_ERROR'
    }      
  }	    
  