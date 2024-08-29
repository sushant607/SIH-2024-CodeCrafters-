import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import UserNavbar from '../UserNavbar/UserNavbar'
import OrgNavbar from "../OrgNavbar/OrgNavbar";
const Navbar = () => {
  const userType = localStorage.getItem("userType");
  const isLoggedIn = localStorage.getItem("token");
  console.log("isloggedin",isLoggedIn)
  const navigate = useNavigate();
  if (!isLoggedIn) {
    return (<nav>
    <div className='logo-header'>
      <img src='' alt='' />
    </div>
    <div className='title-header'>Freelanza</div>
    <div className='nav-header'>
      <Link to={"/"} className='navlink'>
        Home
      </Link>
      <Link to={"/job"} className='navlink'>
        Apply
      </Link>
    </div>
    <div className='login-header'>
      <button
        className='login-button'
        onClick={() => {
          navigate("/login");
        }}
      >
        LOGIN
      </button>
    </div>
  </nav>);
  }
  return (
    userType === 'user' ? <UserNavbar /> : <OrgNavbar />
  );
};

export default Navbar;
