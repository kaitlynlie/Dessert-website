import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images'
import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

return(
    <nav className='app__navbar'>
      <div className='app__navbar-header'>
        <h1 className='.headtext__philosopher'>SWEET TOOTH</h1>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__mulish'><a href='#home'>Home</a></li>
        <li className='p__mulish'><a href='#about'>About</a></li>
        <li className='p__mulish'><a href='#menu'>Menu</a></li>
        <li className='p__mulish'><a href='#awards'>Awards</a></li>
        <li className='p__mulish'><a href='#contact'>Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__mulish'>Log In/Register</a>
        <div/>
        <a href='/' className='p__mulish'>Order Cake</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#000' fontSize={27} onClick={() => setToggleMenu(true)}/>

        {toggleMenu && (
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
          <ul className='app__navbar-smallscreen_links'>
            <li className='p__mulish'><a href='#home'>Home</a></li>
            <li className='p__mulish'><a href='#about'>About</a></li>
            <li className='p__mulish'><a href='#menu'>Menu</a></li>
            <li className='p__mulish'><a href='#awards'>Awards</a></li>
            <li className='p__mulish'><a href='#contact'>Contact</a></li>
          </ul>
        </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;
