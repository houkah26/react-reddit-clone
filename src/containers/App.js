import React, { Component } from 'react';
import TitleBar from '../components/TitleBar';
import Navigation from '../components/Navigation';
import Content from '../components/Content';
import ContentPlaceholder from '../components/ContentPlaceholder';

import './App.css';
import './Content.css';

class App extends Component {
  state = {
    collapsed: true,
    subs: [],
    selectedSub: {
      display_name: "all",
      url: "/r/all/",
      icon_img: require('../images/Reddit-icon.png'), //url 
    },
    posts: []
  };
  
  componentDidMount() {
    this.fetchSubs();
    this.fetchPosts(this.state.selectedSub.url)
  }

  fetchSubs = async () => {
    const response = await fetch('https://www.reddit.com/reddits.json');
    const data = await response.json();
    const subs = data.data.children;
    this.setState({subs: subs});
  }

  fetchPosts = async (subUrl) => {
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
    this.toggleCollapse();
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
    const { collapsed, subs, selectedSub, posts } = this.state;

    return (
      <div className="App">
        <TitleBar toggleCollapse={this.toggleCollapse} />
        <Navigation 
          collapsed={collapsed}
          subs={subs}
          selectSub={this.selectSub}
        />
        {selectedSub.url.length > 0 ? 
          <Content sub={selectedSub} posts={posts}/>
          : <ContentPlaceholder />
        }
      </div>
    );
  }
}

export default App;
