import React from 'react';
import { Navigate } from 'react-router-dom'; // Impor Navigate dari react-router-dom

const Dashboard = () => {
  return <Navigate to="/admin" replace />;
};

export default Dashboard;
