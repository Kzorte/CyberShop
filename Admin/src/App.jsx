import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin/Admin";
import LoginForm from "./Components//Login/LoginForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Periksa apakah pengguna sudah login
    const checkLoginStatus = async () => {
      try {
        const response = await fetch("/check-login-status"); // Endpoint untuk memeriksa status login
        const data = await response.json();
        setIsLoggedIn(data.isLoggedIn);
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Navbar />
          <Admin />
        </>
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
