import React, { Component } from 'react';
import NavItem from '../components/NavItem';

import './Navigation.css';

export default class Navigation extends Component {
  state = {
    subs: []
  }

  componentDidMount() {
    this.fetchSubs();
  }

  fetchSubs = async () => {
    const response = await fetch('https://www.reddit.com/reddits.json');
    const jsonResponse = await response.json();
    const subs = jsonResponse.data.children;
    this.setState({subs: subs});
  }

  render() {
    const navClass = this.props.collapsed ? "collapse" : "";
    const { subs } = this.state;

    return (
      <div className={"navigation " + navClass}>
        <span>POPULAR SUBREDDITS</span>
        <br/>
        <div>
          {subs.map(sub => (
            <NavItem 
              key={sub.data.id}
              sub={sub.data}
              toggleCollapse={this.props.toggleCollapse}
            />
          ))}
        </div>
      </div>
    );
  }
}