import React, { useState } from "react";
import  "./LoginForm.css";
import navlogo from "../../assets/nav-logo.svg";

// import { useHistory } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Login berhasil
        console.log("Login berhasil");
        setIsLoggedIn(true);
        history.push("/");
      } else {
        // Login gagal
        setError(data.error || "Login failed");
      }
    } catch (error) {
      // Handle error
      console.error("Error during login:", error);
      setError("Login failed. Please try again later.");
    }
  };

  return (
    <div className="container">
      <div className = "heading">
        <img src={navlogo} alt="" className="nav-logo" />
        <h4>ADMIN PANEL</h4>
      </div>

      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">
            <span>Email</span>

            <input
              required
              type="email"
              placeholder="example@example.com"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="label">
            <span>Password</span>
            <input
              required
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit" className="button">
            Login
          </button>
        </form>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};

export default LoginForm;
