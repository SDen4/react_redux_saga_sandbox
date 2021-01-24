import React from 'react';

export default ({ posts }) => {
  if (!posts.length) {
    return <h5 className="text-center">There is no any post here... yet...</h5>;
  }
  return (
    <div>
      <span>FetchPosts</span>
    </div>
  );
};
