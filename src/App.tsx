import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/login/Login';
import Error from './component/error/Error';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='*' element={<Error/> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App
