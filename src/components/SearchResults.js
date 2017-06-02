import React from 'react';

const SearchResults = ({ searchResults, selectSub }) => (
  <div className="search-results">
    <ul>
      {searchResults.map(sub => (
        <li
          key={sub.id}
          onClick={() => {selectSub(sub)}}
        >
          {sub.display_name}
        </li>
      ))}
    </ul>
  </div>
)

export default SearchResults;