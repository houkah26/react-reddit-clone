import React from 'react';

const FilterItem = ({ filter, removeFilter}) => (
  <div className="filter-item"
    onClick={removeFilter}
  >
    <i className="fa fa-times" aria-hidden="true"/> {filter}
  </div>
)

export default FilterItem;