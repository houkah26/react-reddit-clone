import React, { Component } from 'react';
import Post from '../components/Post';
import LoadingIcon from '../components/LoadingIcon';
import InvalidSub from '../components/InvalidSub';

import './Content.css';

//Reddit Logo
import logo from '../images/Reddit-icon.png';

const convertToSubUrl = (searchedSub) => {
   return searchedSub.slice(0, 2) === "r/" ? 
    "/" + searchedSub + "/" :
    "/r/" + searchedSub + "/"
}

const filterPosts = (posts, filters) => {
  return posts.filter(post => (
    !checkTitleForFilters(post.data.title, filters)
  ))
}

const checkTitleForFilters = (title, filters) => (
  filters.some(filter => title.toLowerCase().indexOf(filter) > -1)
)

//Default sub r/all
const defaultSub = {
  name: "all",
  img: logo //Default local image
};

export default class Content extends Component {
  state = {
    sub: {
      name: "",
      img: "", //url of default sub image
    },
    posts: [],
    invalidSub: false
  }

  componentDidMount() {
    const searchedSub = this.props.match.params.sub;
    this.selectSubAndFetchPosts(searchedSub);
  }

  componentWillReceiveProps(nextProps) {
    const searchedSub = nextProps.match.params.sub; // check for change in sub url
    if (searchedSub !== this.props.match.params.sub) {
      this.selectSubAndFetchPosts(searchedSub);
    }
  }

  selectSubAndFetchPosts(searchedSub) {
    const subUrl = convertToSubUrl(searchedSub);
    if (subUrl === "/r/all/") {
      this.setState({sub: defaultSub});
      this.fetchPosts(subUrl);
    } else {
      this.selectSub(subUrl);
    }
  } 

  selectSub = async (subUrl) => {
    const response = await fetch(`https://www.reddit.com/subreddits/search.json?q=${subUrl}`);
    const jsonResponse = await response.json();
    const listOfMatchedSubs = jsonResponse.data.children;
    if (listOfMatchedSubs.length === 0) {
      this.setState({invalidSub: true})
    } else {
      listOfMatchedSubs.forEach(sub => {
        if (sub.data.url === subUrl) {
          this.setState({
            sub: {
              name: sub.data.display_name,
              img: sub.data.icon_img
            }
          })
        }
      })
    }
    this.fetchPosts(subUrl);
  }

  fetchPosts = async (subUrl) => {
    this.setState({posts: []});
    const response = await fetch(`https://www.reddit.com${subUrl}.json`);
    const jsonResponse = await response.json();
    const posts = jsonResponse.data.children;
    if (posts.length === 0) {
      this.setState({invalidSub: true});
    } else {
      this.setState({
        posts: filterPosts(posts, this.props.filters),
        invalidSub: false
      });
    }
  }

  render() {
    const { posts, sub, invalidSub } = this.state;

    return (
      <div className="content">
        {invalidSub ? 
          <InvalidSub /> :
          <div>
            <h2>r/{sub.name}</h2>
            <div>
                {posts.length === 0 ?
                  <LoadingIcon /> :
                  posts.map(post => (
                    <div key={post.data.id}>
                      <Post 
                        title={post.data.title}
                        url={post.data.url}
                        numComments={post.data.num_comments}
                        commentUrl={"https://www.reddit.com" + post.data.permalink}
                        upVotes={post.data.ups}
                        thumbnailUrls={[(post.data.thumbnail || ""), (sub.img || "")]}
                        author={post.data.author}
                        createdTime={post.data.created}
                      />
                      <hr />   
                    </div>
                ))}
            </div>
          </div>
        }
      </div>
    )
  }
}


