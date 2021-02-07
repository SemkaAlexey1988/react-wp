

 const QueryTransformer = (value, inPage, idPage) => {
  let galleryArray = []; 
  let galleryList = value.split(',');
  let count = 0
  galleryList.forEach(function(item) {
  count++   
  galleryArray.push(`&include[]=${item}`);
  });  

  let pagesCount 
  let galleryString
  let counter = []; 
  let subarray = []; 
if(inPage){
 
pagesCount = Math.ceil(count/inPage)

  for (let i = 0; i < Math.ceil(count/inPage); i++){
  counter.push({id: i, name: i+1 })
  } 




  for (let i = 0; i <Math.ceil(count/inPage); i++){
  subarray[i] = galleryArray.slice((i*inPage), (i*inPage) + inPage);
  }
  galleryString = subarray[idPage].join(''); 
}else{
  galleryString = galleryArray.join('');
}


  let galleryValue = galleryString.substring(1);

let galleryValues = {
  galleryQuery: galleryValue,
  pagesCount: pagesCount,
  counter: counter  
}


return galleryValues
 }

  export default QueryTransformer  
