import React from 'react';

const NavItem = ({ sub, selectSub }) =>  (
  <div>
    <button onClick={() => selectSub(sub)}>{sub.display_name}</button>
  </div>
)

export default NavItem;