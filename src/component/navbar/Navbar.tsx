import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <li><Link to = '/'>Home</Link> </li>
    <li><Link to= '/about' >About</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    </div>
  )
}

export default Navbar