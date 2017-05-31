import React from 'react';

const NavItem = ({ sub, selectSub, toggleCollapse }) =>  (
  <div>
    <button onClick={() => {
      selectSub(sub);
      toggleCollapse();
    }}>
      {sub.display_name}
    </button>
  </div>
)

export default NavItem;