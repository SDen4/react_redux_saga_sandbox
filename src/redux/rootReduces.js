import { combineReducers } from 'redux';

import postsReducer from './postsReducer';

const routeReducer = combineReducers({ posts: postsReducer });

export default routeReducer;
