import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__philosopher">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_macarons  flex__center">
        <p className="app__specialMenu-menu_heading">Macarons</p>
        <div className="app__specialMenu_menu_items">
          {data.macarons.map((macaron, index) => (
            <MenuItem key={macaron.title + index} title={macaron.title} price={macaron.price} tags={macaron.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.cupcakes} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cupcakes  flex__center">
        <p className="app__specialMenu-menu_heading">Cupcakes</p>
        <div className="app__specialMenu_menu_items">
          {data.cupcakes.map((cupcake, index) => (
            <MenuItem key={cupcake.title + index} title={cupcake.title} price={cupcake.price} tags={cupcake.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;