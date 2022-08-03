
import{Routes,Route,Navigate } from 'react-router-dom';
import About from '../component/pages/about/About';
import Home from '../component/pages/home/Home';
import Login from '../component/pages/login/Login';
import Patient from '../component/pages/patient/Patient';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/patient' element={<Patient/>}></Route>
      
      <Route path='*' element={<h1>Page Not found</h1>}></Route>
    </Routes>
  )
}

export default AppRoutes