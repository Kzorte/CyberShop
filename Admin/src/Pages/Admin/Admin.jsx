// Admin.jsx

import React from 'react';
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar'; 
import { Routes, Route } from 'react-router-dom';
import AddProduct from '../../Components/AddProduct/Addproduct';
import ListProduct from '../../Components/ListProduct/ListProduct'; // Pastikan impor ini sesuai dengan ekspor default

const Admin = () => { 
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/> {/* Pastikan penggunaan ListProduct sesuai dengan ekspor default */}
      </Routes>
    </div>
  );
};

export default Admin;
