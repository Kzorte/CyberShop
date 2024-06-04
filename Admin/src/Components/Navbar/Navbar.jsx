import React from 'react';
import './Navbar.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import navlogo from '../../assets/nav-logo.svg';  // Pastikan path benar

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    navigate('/login'); // Navigasi ke halaman login
  };

  const isLoginPage = location.pathname === '/login';

  return (
    <div className="navbar">
      {/* Menambahkan logo */}
      <img src={navlogo} alt="Logo" className="nav-logo" />
      {/* Konten navbar lainnya, tombol di sebelah kanan */}
      <div>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="login-button">Logout</button>
        ) : !isLoginPage && (
          <button onClick={handleLogin} className="login-button">Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
