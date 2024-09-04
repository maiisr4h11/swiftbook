// src/Project/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, user }) => {
    return user ? <Component user={user} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
