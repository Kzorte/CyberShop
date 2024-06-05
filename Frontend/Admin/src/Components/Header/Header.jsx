import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Atau Anda dapat memaksa refresh untuk navigasi ke halaman login
  };

  return (
    <header className="admin-header">
      <h1>CyberShop</h1>
      {isLoggedIn ? (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className="logout-btn" onClick={() => navigate('/login')}>
          Login
        </button>
      )}
    </header>
  );
};

export default Header;