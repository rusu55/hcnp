import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className='nav'>
        <div className="container">
          <div className="navbar">
          <img  src='assets/logo-go-png.png' className='logo' /> 
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
