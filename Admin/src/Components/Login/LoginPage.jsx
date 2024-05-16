import React from 'react';
import './LoginPage.css';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    // Panggil prop onLoginSuccess saat login berhasil
    onLoginSuccess();
    // Arahkan pengguna ke halaman admin setelah login berhasil
    navigate('/admin'); // Atau sesuaikan dengan rute halaman admin
  };

  return (
    <div className="login-page-container">
      <Login onLoginSuccess={handleLoginSuccess} />
      {/* Komponen lain jika diperlukan */}
    </div>
  );
};

export default LoginPage;
