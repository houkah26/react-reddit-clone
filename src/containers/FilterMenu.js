import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FilterItem from '../components/FilterItem';
import AddFilter from './AddFilter';

import './FilterMenu.css';

export default class FilterMenu extends Component {
  state = {
    visible: false
  }

  show = () => {
    this.setState({ visible: true });
  }  
  
  hide = () => {
    this.setState({ visible: false })
  }

  focus() {
    if (this.state.visible) 
    ReactDOM.findDOMNode(this.refs.filterMenuDiv).focus();
  }

  render() {
    const { filters, changeFilters } = this.props;
    const { visible } = this.state;

    const filtersClass = visible ? "filters show" : "filters" 

    return (
      <div className="filter-menu" ref="filterMenuDiv" onFocus={this.show} onBlur={this.hide} tabIndex={0}>
        <span onClick={() => this.focus()}>
          Filters <i className="fa fa-caret-down" aria-hidden="true" />
        </span>
        <div className={filtersClass}>
          {filters.map(filter => (
            <FilterItem 
              key={filter}
              filter={filter}
              removeFilter={() => changeFilters("remove", filter)}
            />
          ))}
          <AddFilter
            changeFilters={changeFilters}
            show={this.show}
            hide={this.hide}
          />
        </div>
      </div>
    )
  }
}