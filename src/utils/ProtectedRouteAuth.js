import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouteAuth = ({element: Component, ...props}) => {
  return(
    !props.loggedIn ? <Component {...props} /> : <Navigate to='/movies' replace />
  )
}

export default ProtectedRouteAuth; 