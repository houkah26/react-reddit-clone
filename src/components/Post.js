import React from 'react';
import Img from 'react-image';
import LoadingIcon from './LoadingIcon';

import './Post.css';

//Default reddit logo
import redditLogo from '../images/Reddit-icon.png';

const timeConverter = (UNIX_timestamp) => {
  const a = new Date(UNIX_timestamp * 1000);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const day = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(); 
  // const sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
  const formattedTime = month + ' ' + day + ', ' + year + ' at ' + hour + ':' + min;
  return formattedTime;
}


const Post = ({
  title,
  url,
  thumbnailUrls,
  author,
  upVotes,
  numComments,
  commentUrl,
  createdTime
}) => (
  <div className="post">
    <div className="image-container">
      <Img 
        src={[
          thumbnailUrls[0],
          thumbnailUrls[1],
          redditLogo
        ]}
        loader={<LoadingIcon />}
      />
    </div>
    <div className="container">
      <a className="title" href={url} target="_blank" rel="noopener noreferrer">{title}</a>
      <div className="info">
        <span>Submitted by {author} on {timeConverter(createdTime)},</span>
        <span>Up-Votes: {upVotes},</span>
        <a href={commentUrl} target="_blank" rel="noopener noreferrer">
          Comments: {numComments}
        </a>
      </div>
    </div>
  </div>
);

export default Post;