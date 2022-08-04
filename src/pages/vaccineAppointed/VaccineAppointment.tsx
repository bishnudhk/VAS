import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import {Button} from 'antd';
import { useNavigate } from 'react-router-dom';

const VaccineAppointment:React.FC = () => {
    const navigate = useNavigate();

    const addButton = () =>{
    navigate({ pathname: '/addVaccineAppointed' })
    }
  return (
    <div>
    <Navbar/>
    <div className='addBtn'>
    <Button onClick={addButton}>Add Vaccine Appointment</Button>
    </div>
   </div>
  )
}

export default VaccineAppointment