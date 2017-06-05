import React from 'react';

const SearchResults = ({ searchResults, selectSub, toggleCollapse }) => (
  <div className="search-results">
    <ul>
      {searchResults.map(sub => (
        <li
          key={sub.id}
          onClick={() => {
            selectSub(sub);
            toggleCollapse("collapse");
          }}
        >
          {sub.display_name}
        </li>
      ))}
    </ul>
  </div>
)

export default SearchResults;