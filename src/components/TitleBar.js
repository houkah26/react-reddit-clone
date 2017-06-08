import React from 'react';
import SearchForm from '../containers/SearchForm';

import './TitleBar.css';

//Reddit Logo
import logo from '../images/Reddit-icon.png';

const TitleBar = ({
  toggleCollapse,
  selectDefaultSub,
  searchSub,
  selectSub,
}) => (
  <div className="title-bar">
    <img 
      src={logo}
      alt="r/all"
      onClick={selectDefaultSub}
      title="r/all"
    />
    <span className="title">houkah reddit</span>
    <div>
      <SearchForm selectSub={selectSub} toggleCollapse={toggleCollapse}/>
    </div>
    <div className="nav-toggler">
      <i className="fa fa-bars fa-3x nav-toggler-icon" aria-hidden="true" 
        onClick={() => {
          toggleCollapse();
          window.scrollTo(0, 0);
        }}
      />
    </div>
  </div>
)

export default TitleBar;