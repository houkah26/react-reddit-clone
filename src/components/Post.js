import React from 'react';
import Img from 'react-image';
import LoadingIcon from './LoadingIcon';
import './Post.css';

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
          require('../images/Reddit-icon.png')
        ]}
        loader={<LoadingIcon />}
      />
    </div>
    <div className="container">
      <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
      <div className="info">
        <span>Submitted by {author} on {createdTime},</span>
        <span>Up-Votes: {upVotes},</span>
        <a href={commentUrl} target="_blank" rel="noopener noreferrer">
          Comments: {numComments}
        </a>
      </div>
    </div>
  </div>
);

export default Post;