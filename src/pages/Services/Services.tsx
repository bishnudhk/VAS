import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import {Button} from 'antd';
import { useNavigate } from 'react-router-dom';

const Services:React.FC = () => {
    const navigate = useNavigate();

    const addButton = () =>{
    navigate({ pathname: '/addServices' })
    }
  return (
    <div>
    <Navbar/>
    <div className='addBtn'>
    <Button onClick={addButton}>Add Services</Button>
    </div>
   </div>
  )
}

export default Services