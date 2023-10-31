import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef'/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Founder's Word" />
      <h1 className='headtext__philosopher'>What We Believe In</h1>
      <div className='app__chef-content'>
          <p className='p__mulish'>We see baking as a form of art: in the same way there are different art styles, there should be different baking options that leads to a diverse group of baked goods, designed for our different society. We are working on this goal and hope you join our journey along the way!</p>
      </div>

      <div className='app__chef-sign'>
        <p>Stacy Dam</p>
        <p className='p__mulish'> Founder</p>
        <img src={images.sign} alt='sign' style={{width: '10px'}}/>
      </div>
    </div>
  </div>
);

export default Chef;
