
import { useEffect } from 'react';
import{Routes,Route,Navigate, useNavigate } from 'react-router-dom';
import About from '../pages/about/About';
import AddPatient from '../pages/AddPatient';
import AddServices from '../pages/AddServices';
import AddVaccineAppointment from '../pages/AddVaccineAppointment';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Patient from '../pages/patient/Patient';
import Services from '../pages/Services/Services';
import VaccineAppointment from '../pages/vaccineAppointment/VaccineAppointment';

const AppRoutes:React.FC = () => {

  const navigation = useNavigate();
  var isLoggedIn = localStorage.getItem("isLoggedIn");
  useEffect(() =>{
    if(isLoggedIn !== "true"){
      navigation({pathname:"/login"});
    }
  },[isLoggedIn])
  return (
       
    
    
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/addPatient' element={<AddPatient/>}></Route>
      <Route path='/patient' element={<Patient/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/addServices' element={<AddServices/>} ></Route>
      <Route path='/vaccineAppointment' element={<VaccineAppointment/>} ></Route>
      <Route path='/addvaccineAppointment' element={<AddVaccineAppointment/>} ></Route>
      
      <Route path='*' element={<h1>Page Not found</h1>}></Route>
    </Routes>
    
  )
}

export default AppRoutes