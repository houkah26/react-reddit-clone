import React from 'react';

const SearchResults = ({ searchResults, selectSub, collapsed, toggleCollapse }) => {
  const collapseClass = collapsed ? "collapse" : "";

  return (
    <div className={"search-results " + collapseClass}>
      <ul>
        {searchResults.map(sub => (
          <li
            key={sub.id}
            onClick={() => {
              selectSub(sub);
              toggleCollapse();
            }}
          >
            {sub.display_name}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default SearchResults;