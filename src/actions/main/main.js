export const reciveData = (main) => {
    return {
    type: 'FETCH_MAIN_SUCCESS',
    payload: main 
    }      
  }	
export const errorData = () => {
    return {
    type: 'FETCH_MAIN_ERROR'
    }      
  }	   
  