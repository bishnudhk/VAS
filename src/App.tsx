import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/login/Login';
import Error from './component/error/Error';

import './App.css';
import AuthContext from './component/context/AuthContext';
import Home from './component/home/Home';
import Navbar from './component/navbar/Navbar';
import About from './component/about/About';
import Contact from './component/contact/Contact';


const App = () => {
  return (
    <AuthContext>
      
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='*' element={<Error/> } />
    </Routes>
    </BrowserRouter>
    </AuthContext>
  )
}

export default App
