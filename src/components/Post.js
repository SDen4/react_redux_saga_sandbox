import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h3 className="card-title">Title - {post}</h3>
      </div>
    </div>
  );
};

export default Post;
