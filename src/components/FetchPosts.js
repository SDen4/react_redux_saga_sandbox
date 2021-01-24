import React from 'react';
import Post from './Post';

const FetchPosts = ({ posts }) => {
  if (!posts.length) {
    return (
      <>
        <h5>There is no any post here... yet...</h5>
        <button className="btn btn-primary">Download</button>
      </>
    );
  }
  return posts.map((post) => <Post post={post} key={post} />);
};

export default FetchPosts;
