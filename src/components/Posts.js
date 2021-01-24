import React from 'react';
import Post from './Post';

export default ({ posts }) => {
  if (!posts.length) {
    return <h5 className="text-center">There is no any post here... yet...</h5>;
  }
  return posts.map((post) => <Post post={post} key={post} />);
};
