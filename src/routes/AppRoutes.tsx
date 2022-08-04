
import{Routes,Route,Navigate } from 'react-router-dom';
import About from '../pages/about/About';
import AddPatient from '../pages/AddPatient';
import AddVaccineAppointment from '../pages/AddVaccineAppointment';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Patient from '../pages/patient/Patient';
import VaccineAppointment from '../pages/vaccineAppointed/VaccineAppointment';

const AppRoutes:React.FC = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/addPatient' element={<AddPatient/>}></Route>
      <Route path='/patient' element={<Patient/>}></Route>
      <Route path='/vaccineAppointed' element={<VaccineAppointment/>}></Route>
      <Route path='/addVaccineAppointed' element={<AddVaccineAppointment/>} ></Route>
      
      <Route path='*' element={<h1>Page Not found</h1>}></Route>
    </Routes>
  )
}

export default AppRoutes