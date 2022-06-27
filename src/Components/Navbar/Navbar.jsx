import React from 'react';
import './Navbar.css';

import { Link } from 'react-scroll';

export const Navbar = () => {
  return (
    <div className="nav_wrapper">
      <div className="nav_left">
        <div className="nav_name">Lindoelson</div>
        <span>toggle</span>
      </div>
      <div className="nav_right">
        <div className="nav_list">
          <ul>
            <li>Home</li>
            <li>
              <Link to="about">Sobre Mim</Link>
            </li>
            <li>Portfólio</li>
          </ul>    
        </div>
        <button className="btn">
            Contate me!
        </button>
      </div>  
    </div>
  )
}
