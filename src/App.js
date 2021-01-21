import React from 'react';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="container pt3">
      <div className="row">
        <div className="col">Form</div>
      </div>
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
        <div className="col">FETCH POSTS</div>
      </div>
    </div>
  );
}

export default App;
