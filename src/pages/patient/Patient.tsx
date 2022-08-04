import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../component/navbar/Navbar'
import {Button} from 'antd';
// import PatientForm from '../../PatientForm/PatientForm'

const Patient:React.FC = () => {
const navigate = useNavigate();

const addButton = () =>{
  navigate({pathname: '/addPatient'})
}
  return (
    <div>
        <Navbar/>
        <div className='addBtn'>
          <Button onClick={addButton}>Add Patients</Button>

        </div>
    </div>
  )
}

export default Patient