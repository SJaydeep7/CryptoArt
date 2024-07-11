import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import axios from 'axios';

const CheckingRoute = ({ element: Element, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.post(
            'http://localhost:5000/api/check-admin',
            null,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.status === 200) {
            const data = response.data;
            setIsAdmin(data.isAdmin);
          }
          setIsAuthenticated(true);
        } catch (error) {
          console.error('Error checking admin status:', error);
        }
      }
    };
    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  if (isAdmin) {
    return <Navigate to="/admin" />;
  }
};

export default CheckingRoute;
