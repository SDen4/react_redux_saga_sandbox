import React from 'react';
import { connect } from 'react-redux';

import Post from './Post';

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <h5 className="text-center">There is no any post here... yet...</h5>;
  }
  return syncPosts.map((post) => <Post post={post} key={post.id} />);
};

const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
