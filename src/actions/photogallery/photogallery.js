export const reciveData = (photogallery) => {
    return {
    type: 'FETCH_PHOTOGALLERY_SUCCESS',
    payload: photogallery 
    }      
  }	
export const errorData = () => {
    return {
    type: 'FETCH_PHOTOGALLERY_ERROR'
    }      
  }	    
  