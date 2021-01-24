import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import appReducer from './appReducer';

const routeReducer = combineReducers({
  posts: postsReducer,
  loading: appReducer,
});

export default routeReducer;
