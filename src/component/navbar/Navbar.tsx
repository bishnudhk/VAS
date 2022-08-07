import { Button } from "antd";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../storeRedux/slice/AuthSlice";
import "./navbar.css";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAction());
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    navigation({ pathname: "/login" });
  };
  return (
    <div className="navbar">
      <div className="navLink">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/patient">Patient</NavLink>
        <NavLink to="/vaccineAppointment">VaccineAppointment</NavLink>
        <NavLink to="/services">Services</NavLink>
      </div>
      {/* <div className='logoutBtn'> */}
      <Button className="logoutBtn" onClick={handleLogout}>
        Logout
      </Button>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
