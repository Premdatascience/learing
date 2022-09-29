import React from 'react';
import { Route , Redirect} from 'react-router-dom';

const ProtectedRoute = (component,...rest) => {
var RenderComponents = component;
  return (
    <Route
    {...rest}
    render={prop=>{
         return true ? (
        <RenderComponents {...prop}/>
         ):(
<Redirect 
to = {{
    pathname:"login"
}}
/>
         )

    }}/>
    
    )
}
    
 
    


export default ProtectedRoute;