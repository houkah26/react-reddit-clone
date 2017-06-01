import React, { Component } from 'react';
import { sortBy } from 'lodash';
import SearchResults from '../components/SearchResults';

import './SearchForm.css'

const sortResults = (searchResults) => {
  const sortedResults = sortBy(searchResults, [sub => sub.data.subscribers]).reverse();
  
  let filteredResults = [];
  sortedResults.forEach(sub => {
    if (sub.data.subscribers > 1) {
      filteredResults.push(sub.data);
    }
  });

  const maxNumResults = 5;

  return filteredResults.slice(0, Math.min(maxNumResults, filteredResults.length));
};

export default class SearchForm extends Component {
  state = {
    searchTerm: '',
    searchResults: [],
    collapsed: true,
  };

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.searchSub(this.state.searchTerm);
  }

  searchSub = async (searchTerm) => {
    const response = await fetch(`https://www.reddit.com/subreddits/search.json?q=${searchTerm}`);
    const data = await response.json();
    const results = data.data.children;
    this.setState({searchResults: sortResults(results)});
  }

  toggleCollapse = () => {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const {
      searchTerm,
      searchResults,
      collapsed
    } = this.state;

    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <span className="fa fa-search"/>
          <input
            type="text"
            placeholder="subreddit"
            value={searchTerm}
            onChange={this.handleChange}
            onFocus={this.toggleCollapse}
          />
          <SearchResults 
            searchResults={searchResults}
            selectSub={this.props.selectSub}
            collapsed={collapsed}
            toggleCollapse={this.toggleCollapse}
          />
        </form>
      </div>
    );
  }
}
