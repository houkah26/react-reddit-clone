import React from 'react';
import NavItem from './NavItem';

import './Navigation.css';

const Navigation = ({ collapsed, selectSub, subs, toggleCollapse }) => {
  const navClass = collapsed ? "collapse" : ""

  return (
    <div className={"navigation " + navClass}>
      <span>POPULAR SUBREDDITS</span>
      <br/>
      {subs.map(sub => (
        <NavItem 
          key={sub.data.id}
          sub={sub.data}
          selectSub={selectSub}
          toggleCollapse={toggleCollapse}
        />
      ))}
    </div>
  );
};



export default Navigation;