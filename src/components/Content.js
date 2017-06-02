import React from 'react';
import Post from './Post';
import LoadingIcon from './LoadingIcon';

import './Content.css';

const Content = ({ sub, posts }) => (
  <div className="content">
    <h2>r/{sub.display_name}</h2>
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
              thumbnailUrls={[(post.data.thumbnail || ""), (sub.icon_img || "")]}
              author={post.data.author}
              createdTime={post.data.created}
            />
            <hr />   
          </div>
        ))
      }
    </div>
  </div>
);

export default Content;
