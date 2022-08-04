import React from 'react'
import Navbar from '../component/navbar/Navbar'
import PatientForm from '../component/PatientForm/PatientForm'

const AddPatient:React.FC = () => {
  return (
    <div>
        <Navbar/>
        <PatientForm/>
    </div>
  )
}

export default AddPatient