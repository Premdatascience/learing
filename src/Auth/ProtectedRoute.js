import React from "react";
import { Navigate, Outlet } from 'react-router-dom'
import SideNavebar from "../Sidenavebar/SideNavebar";
const ProtectedRoute = () => {

 
    let auth =localStorage.getItem("token")
  return (
      auth ? <SideNavebar><Outlet/></SideNavebar> : <Navigate to='/login'/>
    )
}

const PublicdRoute = () => {

 
  let auth =localStorage.getItem("token")
return (
    auth ?   <Navigate to='/'/>:<Outlet/>
  )
}

export  {ProtectedRoute,PublicdRoute};