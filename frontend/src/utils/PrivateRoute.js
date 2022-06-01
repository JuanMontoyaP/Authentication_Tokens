import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function PrivateRoute() {
  const authenticated = null; // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return authenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
