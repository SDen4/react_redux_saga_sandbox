import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Post from './Post';
import { fetchPost } from '../redux/actions';

const FetchPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);

  if (!posts.length) {
    return (
      <>
        <h5>There is no any post here... yet...</h5>
        <button
          onClick={() => dispatch(fetchPost())}
          className="btn btn-primary"
        >
          Download
        </button>
      </>
    );
  }
  return posts.map((post) => <Post post={post} key={post.id} />);
};

export default FetchPosts;
