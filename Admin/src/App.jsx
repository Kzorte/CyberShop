import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Components/Login/LoginPage';
import Signup from './Components/Signup/Signup';
import Admin from './Pages/Admin/Admin';
import Navbar from './Components/Navbar/Navbar';

const ProtectedRoute = ({ children, isLoggedIn }) => {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/signup" element={<Signup />} /> {/* Tambahkan rute untuk halaman signup */}
        <Route path="/admin/*" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Admin /></ProtectedRoute>} />
        <Route path="/" element={<Navigate to="/admin" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
