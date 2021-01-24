import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h3 className="card-title">{post.title}</h3>
      </div>
    </div>
  );
};

export default Post;
