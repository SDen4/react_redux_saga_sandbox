import React from 'react';
import PostForm from './components/PostForm';
import FetchPosts from './components/FetchPosts';
import Posts from './components/Posts';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <h1>App</h1>
      </div>
      <div className="row">
        <PostForm />
      </div>
      <div className="row">
        <div className="col">
          <h2>Sync posts</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Async posts</h2>
          <FetchPosts posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
