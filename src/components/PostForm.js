import React from 'react';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitHandler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Post title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter the Post title"
          />
          <button className="btn btn-success" type="submit">
            Add new Post
          </button>
        </div>
      </form>
    );
  }
}
