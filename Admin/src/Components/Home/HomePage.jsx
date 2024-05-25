import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Pastikan Anda membuat file CSS yang sesuai

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the CyberShop Admin Panel</h1>
      </header>
      <main className="home-main">
        <p>Manage your products, orders, and user accounts in one place.</p>
        <div className="home-actions">
          <button onClick={() => navigate('/login')}>Login</button>
          {/* Jika Anda memiliki halaman pendaftaran, Anda bisa menambahkan navigasi ke sana juga */}
          {/* <button onClick={() => navigate('/signup')}>Sign Up</button> */}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
