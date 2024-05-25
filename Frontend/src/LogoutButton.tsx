import React from "react";
import { useAuth } from "@/hooks/auth"; // Contoh hook untuk autentikasi

const LogoutButton = () => {
  const { logout } = useAuth(); // Mendapatkan fungsi logout dari hook autentikasi

  const handleLogout = async () => {
    try {
      await logout(); // Memanggil fungsi logout
      // Setelah berhasil logout, lakukan navigasi ke halaman login atau halaman lain yang sesuai
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button> // Tombol logout
  );
};

export default LogoutButton;
