import axios from "axios";

const API_URL = "http://localhost:3001"; // Ganti dengan URL backend Anda

export const signup = async (userData: { username: string; email: string; password: string; }) => {
  return axios.post(`${API_URL}/signup`, userData);
};

export const pagelogin = async (userData: { email: string; password: string; }) => {
  return axios.post(`${API_URL}/login`, userData);
};
