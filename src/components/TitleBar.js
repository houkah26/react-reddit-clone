import React from 'react';
import SearchForm from '../containers/SearchForm';

import './TitleBar.css';

const TitleBar = ({ toggleCollapse, selectDefaultSub, searchSub, selectSub }) => (
  <div className="title-bar">
    <img 
      src={require('../images/Reddit-icon.png')}
      alt="r/all"
      onClick={selectDefaultSub}
      title="r/all"
    />
    <span className="title">Houkah reddit</span>
    <div>
      <SearchForm selectSub={selectSub}/>
    </div>
    <div className="nav-toggler">
      <i className="fa fa-bars fa-3x nav-toggler-icon" aria-hidden="true" 
        onClick={toggleCollapse}
      />
    </div>
  </div>
)

export default TitleBar;