import React from 'react';

import './TitleBar.css';

const TitleBar = ({ toggleCollapse, selectDefaultSub }) => (
  <div className="title-bar">
    <img 
      src={require('../images/Reddit-icon.png')}
      alt="r/all"
      onClick={selectDefaultSub}
    />
    <span className="title">Houkah Reddit</span>
    <div className="nav-toggler">
      <span>SUBREDDITS</span>
      <i className="fa fa-bars fa-3x nav-toggler-icon" aria-hidden="true" 
        onClick={toggleCollapse}
      />
    </div>
  </div>
)

export default TitleBar;