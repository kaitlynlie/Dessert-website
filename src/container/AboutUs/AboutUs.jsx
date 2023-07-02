import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__philosopher'> About Us </h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__mulish'>A brain child from a mother an daughter, we are a home-owned bakery. We currently have bakeries at two locations and hope to continue to grow.</p>
        <button type='button' className='custom__button'>Learn More</button>
      </div>
      <div className='app__aboutus-content_rollingpin flex__center'>
        <img src={images.rollingpin} alt='about_rollingpin'/>
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__philosopher'> Our History </h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__mulish'>Often times, we wish for more varities in bakeries, not only in unique flavors but options, such as vegan or lactose free options. So, we have made it happen!</p>
        <button type='button' className='custom__button'>Learn More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
