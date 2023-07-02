import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { Simulate } from 'react-dom/test-utils';
const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <h1 className='headtext__philosopher' style = {{ marginBottom: '3rem' }}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__mulish'>123 Magenta Lane, Purple County, PC7</p>
        <p className='p__philosopher' style= {{ color: 'var(--color-black)', margin: '2rem 0'}}>Opening Hours</p>
        <p className='p__mulish'>Mon - Fri: 8:00 am - 10:00 pm</p>
        <p className='p__mulish'>Sat - Sun: 8:00 am - 11:00 pm</p>
      </div>
      <button className='custom__button' style= {{ marginTop: '2rem'}}>Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='find us' />
    </div>
  </div>
);

export default FindUs;
