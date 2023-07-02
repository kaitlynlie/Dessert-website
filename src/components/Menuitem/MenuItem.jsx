import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className='app__menuitem'>
    <div className='app__menuitem-head'>
      <div className='app__menuitem-name'>
        <p className='p__philosopher' style={{ color: 'var(--color-black)'}}>{title}</p>
      </div>

      <div className='app__menuitem-dash' />

      <div className='app__menuitem-price'>
        <p className='p__philosopher'>{price}</p>
      </div>
    </div>
    <div className='app__menuitem-sub'>
      <p className='p__mulish' style={{ color: 'var(--color-black'}}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
