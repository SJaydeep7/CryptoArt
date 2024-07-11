import React, { useEffect, useState } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';

const checkAuth = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const response = await fetch('http://localhost:5000/api/check-user', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        return data.isUser;
      }
    } catch (error) {
      console.error('Error checking user status:', error);
    }
  }
  return false; // Return false if no token or if any error occurs
};

const LoginRoute = ({ element: Element, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      const isUserAuthenticated = await checkAuth();
      setIsAuthenticated(isUserAuthenticated);
    };

    checkAuthentication();
  }, []); 
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default LoginRoute;
