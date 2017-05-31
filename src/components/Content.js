import React from 'react';
import Post from './Post';
import LoadingIcon from './LoadingIcon';

// const thumbnailExists = (thumbnail) => {
//   return thumbnail.slice(0, 4) === "http"
// }

const Content = ({ sub, posts }) => (
  <div className="content">
    <h2>r/{sub.display_name}</h2>
    <div>
      {posts.length === 0 ?
        <LoadingIcon /> :
        posts.map(post => (
          <Post 
            key={post.data.id}
            title={post.data.title}
            url={post.data.url}
            numComments={post.data.num_comments}
            upVotes={post.data.ups}
            thumbnailUrls={[(post.data.thumbnail || ""), (sub.icon_img || "")]}
            author={post.data.author}
            createdTime={post.data.created}
          />   
        ))
      }
    </div>
  </div>
);

export default Content;
