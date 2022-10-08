import React from "react";
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

 
    let auth =localStorage.getItem("token")
  return (
      auth ? <Outlet/> : <Navigate to='/login'/>
    )
}

const PublicdRoute = () => {

 
  let auth =localStorage.getItem("token")
return (
    auth ?   <Navigate to='/'/>:<Outlet/>
  )
}

export  {ProtectedRoute,PublicdRoute};