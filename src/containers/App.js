import React, { Component } from 'react';
import TitleBar from '../components/TitleBar';
import Navigation from '../components/Navigation';
import Content from '../components/Content';

import './App.css';

//Default sub r/all
const defaultSub = {
  display_name: "all",
  url: "/r/all/",
  icon_img: require('../images/Reddit-icon.png') //Default local image
};

export default class App extends Component {
  state = {
    collapsed: true,
    subs: [],
    selectedSub: {
      display_name: "",
      url: "",
      icon_img: "", //url 
    },
    posts: []
  };
  
  componentDidMount() {
    this.fetchSubs();
    this.selectSub(defaultSub);
  }

  fetchSubs = async () => {
    const response = await fetch('https://www.reddit.com/reddits.json');
    const data = await response.json();
    const subs = data.data.children;
    this.setState({subs: subs});
  }

  fetchPosts = async (subUrl) => {
    this.setState({posts: []});
    const response = await fetch(`https://www.reddit.com${subUrl}.json`);
    const data = await response.json();
    const posts = data.data.children;
    this.setState({posts: posts});
  }

  toggleCollapse = () => {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  selectSub = (sub) => {
    this.fetchPosts(sub.url);
    this.setState({
      selectedSub: {
        display_name: sub.display_name,
        url: sub.url,
        icon_img: sub.icon_img
      }
    });
  }

  render() {
    const {
      collapsed,
      subs,
      selectedSub,
      posts
    } = this.state;

    return (
      <div className="App">
        <TitleBar 
          toggleCollapse={this.toggleCollapse}
          selectDefaultSub={() => this.selectSub(defaultSub)}
          selectSub={this.selectSub}
        />
        <Navigation 
          collapsed={collapsed}
          subs={subs}
          selectSub={this.selectSub}
          toggleCollapse={this.toggleCollapse}
        />
        <Content sub={selectedSub} posts={posts}/>
      </div>
    );
  }
}
