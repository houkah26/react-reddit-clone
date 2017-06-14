import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ sub, toggleCollapse }) =>  (
  <button onClick={() => {
    toggleCollapse();
  }}>
    <NavLink 
      to={sub.url}
      style={{display: 'block', height: '100%', textDecoration: 'none'}}
    >
      {sub.display_name}
    </NavLink>
  </button>
)

export default NavItem;