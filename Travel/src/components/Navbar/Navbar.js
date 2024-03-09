import React, { useState } from 'react';
import '../Navbar/navbar.css';

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="ham">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <span className="menu">
          <span className="hamburger"></span>
        </span>
        <ul style={{ display: isChecked ? 'block' : 'none' }}>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#booking">BOOKING</a></li>
          <li><a href="#testimonials">TESTIMONIALS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </label>
      <div className="nav__container">
      <div className="nav">
        <div className='icon-container'>
          <div className='con'><a href="#home">Home</a></div>
        </div>
        <div className='icon-container'>
          <div className='con'><a href="#about">About</a></div>
        </div>
        <div className='icon-container'>
          <div className='con'><a href="#booking">Booking</a></div>
        </div>
        <div className='icon-container'>
          <div className='con'><a href="#testimonials">Testimonials</a></div>
        </div>
        <div className='icon-container'>
          <div className='con'><a href="#contact">Contact </a></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;