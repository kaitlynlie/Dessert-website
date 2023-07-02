import React from 'react';
import { images } from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Have a treat, you deserve it'/>
      <h1 className='headtext__philosopher'>Satisfy Your Sweet Tooth</h1>
      <p className='p__mulish' style={{ margin: '2rem 0'}}>From our vegan options, low sugar options, and other varieties, we have aiming to have baked goods with multiple options to cater towards everyone.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
