

 const RouteTransformer = (value) => {
  const route4 = value.replace(/\/wp/g, ""); 
  const route3 = route4.replace(/\/uk/g, ""); 
  const route2 = route3.replace(/\/ru/g, ""); 
  const route = route2.replace(/\/en/g, "");    
return route
 }

  export default RouteTransformer  
