import React from 'react';
import Img from 'react-image';
import LoadingIcon from './LoadingIcon';
import './Post.css';

const Post = ({ title, url, thumbnailUrls, author, upVotes, numComments }) => (
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
      <a href={url}>{title}</a>
      <div className="info">
        <span>Author: {author}</span>
        <span>Up-Votes: {upVotes}</span>
        <span>Comments: {numComments}</span>
      </div>
    </div>
  </div>
);

export default Post;