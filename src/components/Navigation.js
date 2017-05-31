import React from 'react';
import NavItem from './NavItem';

import './Navigation.css';

// const navItems = [1, 2, 3, 4, 5];

const Navigation = ({ collapsed, selectSub, subs }) => {
  const navClass = collapsed ? "collapse" : ""

  return (
    <div className={"navigation " + navClass}>
      <span>SUBREDDITS:</span>
      <br/>
      {subs.map(sub => (
        <NavItem key={sub.data.id} sub={sub.data} selectSub={selectSub} />
      ))}
    </div>
  );
};



export default Navigation;