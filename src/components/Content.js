import React from 'react';
import Post from './Post';
import LoadingIcon from './LoadingIcon';

import './Content.css';


const timeConverter = (UNIX_timestamp) => {
  const a = new Date(UNIX_timestamp * 1000);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const day = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(); 
  // const sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
  const formattedTime = month + ' ' + day + ', ' + year + ', ' + hour + ':' + min;
  return formattedTime;
}

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
              createdTime={timeConverter(post.data.created)}
            />
            <hr />   
          </div>
        ))
      }
    </div>
  </div>
);

export default Content;
