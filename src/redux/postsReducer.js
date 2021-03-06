import { CREATE_POST } from './types';
import { FETCH_POSTS } from './types';

const initialState = {
  posts: [],
  fetchedPosts: [],
};

const postsReduser = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      //   return { ...state, posts: state.posts.concat([action.payload]) }; // the first variant
      return { ...state, posts: [...state.posts, action.payload] }; // the second variant
    case FETCH_POSTS:
      return { ...state, fetchedPosts: action.payload }; // the second variant
    default:
      return state;
  }
};

export default postsReduser;
