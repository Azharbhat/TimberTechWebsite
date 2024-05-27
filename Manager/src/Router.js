import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Manager/Login/Login'
import Register from './components/Manager/Login/Register'
import Wellcome from './components/Manager/Login/Welcome'
import Join from './components/Manager/Login/Join'
import Home from './components/Manager/HomeFolder/Home';
import MillList from './components/Worker/MillList'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wellcome />} />
        <Route path="/MIllList" element={<MillList />} />
       
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path='/Join' element={<Join/>}/>
        {/* Other routes can be defined here */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

