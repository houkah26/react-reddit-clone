import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ searchResults, toggleCollapse }) => (
  <div className="search-results">
    <ul>
      {searchResults.map(sub => (
        <li
          key={sub.id}
          onClick={() => {
            toggleCollapse("collapse");
          }}
        >
          <Link 
            to={sub.url}
            style={{display: 'block', height: '100%', textDecoration: 'none'}}
          >
            {sub.display_name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default SearchResults;