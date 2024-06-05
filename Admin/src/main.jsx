import React from 'react';
import { createRoot } from 'react-dom/client'; // Mengimpor createRoot dari react-dom/client
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root')); // Menggunakan createRoot dari react-dom/client
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
