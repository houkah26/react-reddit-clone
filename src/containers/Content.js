import React, { Component } from 'react';
import Post from '../components/Post';


export default class Content extends Component {
  state = {
    posts: []
  }

  async componentWillMount() {
    // console.log("component will mount");
    await this.fetchPosts();
  }

   async componentWillReceiveProps() {
    // console.log("component will receive props");
    await this.fetchPosts();
  }

  fetchPosts = async () => {
    const subUrl = this.props.sub.url;
    const response = await fetch(`https://www.reddit.com${subUrl}.json`);
    const data = await response.json();
    const posts = await data.data.children;
    await this.setState({posts: posts})
  }

  setThumbnail = (thumbnail) => {
    if (thumbnail.slice(0, 4) !== "http") {
      return this.props.sub.icon_img;
    } else {
      return thumbnail;
    }
  }

  render() {
    const { sub } = this.props;
    const { posts } = this.state;

    return (
      <div className="content">
        <h2>{sub.display_name}</h2>
        <div>
          {posts.length === 0 ?
            <div>Loading...</div> :
            posts.map(post => (
              <Post 
                key={post.data.id}
                title={post.data.title}
                url={post.data.url}
                numComments={post.data.num_comments}
                upVotes={post.data.ups}
                thumbnail={this.setThumbnail(post.data.thumbnail)}
                author={post.data.author}
                createdTime={post.data.created}
              />   
            ))
          }
        </div>
      </div>
    )
  }
}
