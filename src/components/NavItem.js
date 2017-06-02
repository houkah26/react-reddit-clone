import React from 'react';

const NavItem = ({ sub, selectSub, toggleCollapse }) =>  (
  <button onClick={() => {
    selectSub(sub);
    toggleCollapse();
  }}>
    {sub.display_name}
  </button>
)

export default NavItem;