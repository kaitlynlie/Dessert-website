import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <Newsletter />
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__mulish'>123 Magenta Lane, Purple County, PC7</p>
        <p className="p__mulish">+1 212-344-1230</p>
        <p className="p__mulish">+1 212-555-1230</p>
      </div>
      <div className='app__footer-links_logo'>
        <h1 className='headtext__philosopher'>Sweet Tooth</h1>
        <p className='p__mulish'>"Have a treat, you deserve it."</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{ marginTop: 15}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__mulish'>Monday-Friday:</p>
        <p className="p__mulish">08:00 am - 10:00 pm</p>
        <p className="p__mulish">Saturday-Sunday:</p>
        <p className="p__mulish">08:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__mulish'>2023 Sweet Tooth. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
