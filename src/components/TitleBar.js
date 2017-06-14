import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../containers/SearchForm';

import './TitleBar.css';

//Reddit Logo
import logo from '../images/Reddit-icon.png';

const TitleBar = ({ toggleCollapse }) => (
  <div className="title-bar">
    <Link to="/r/all">
      <img 
        src={logo}
        alt="r/all"
        title="r/all"
      />
    </Link>
    <span className="title">houkah reddit</span>
    <div>
      <SearchForm toggleCollapse={toggleCollapse}/>
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