import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import {loginContext,loginInterface} from '../../context/AuthContext';

const Logout = () => {
  const navigate =  useNavigate();
  const {setIsLoggedIn} = useContext(loginContext) as loginInterface;
   const handleLogout = () =>{
    localStorage.removeItem('userDetail');
    setIsLoggedIn(false);
    navigate ({pathname:'/login'});
  }
  return (
    <div className='logout'>
        <h3>LogOut</h3>
        <div className='logoutBtn'>
         <button onClick={handleLogout}>LogOut</button>
        </div>

    </div>
  )
}

export default Logout