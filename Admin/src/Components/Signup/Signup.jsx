import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Menggunakan useNavigate

const Signup = () => {
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
    });
    const navigate = useNavigate();  // Ganti 'history' dengan 'navigate'
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:3000/admin/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
          console.log("Pendaftaran berhasil:", data);
          navigate("/login"); // Ganti 'history.push' dengan 'navigate'
        } else {
          console.error("Pendaftaran gagal:", data.errors || "Terjadi kesalahan");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    return (
      <div className="container">
        <h2>Daftar Akun Baru</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Nama Pengguna:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Alamat Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Kata Sandi:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Daftar</button>
        </form>
      </div>
    );
  };
  
  export default Signup;
