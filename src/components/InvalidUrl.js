import React from 'react';

const styles = {
  paddingLeft: "1em",
  color: "orangered"
};

const InvalidUrl = ({ location }) => (
  <p className="invalid-url" style={styles}>
    Invalid Url: No match for <code>{location.pathname}</code>, select a subreddit or try again.
  </p>
);

export default InvalidUrl;