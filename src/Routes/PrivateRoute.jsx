import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
   const login = JSON.parse(localStorage.getItem("login")) || false;
   return login !== false ? <Outlet/> : <Navigate exact to={`${process.env.PUBLIC_URL}/login`}/>
}
export default PrivateRoutes;