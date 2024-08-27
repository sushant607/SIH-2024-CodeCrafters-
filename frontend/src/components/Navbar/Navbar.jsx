import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
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
    </nav>
  );
};

export default Navbar;
