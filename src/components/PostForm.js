import React from 'react';
import { connect } from 'react-redux';

import { createPost } from '../redux/actions';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    const { title } = this.state;

    // protection of creation posts with empty titles
    if (!title.trim()) return null;

    const newPost = { title, id: Date.now().toString() };
    console.log(newPost);

    console.log(newPost.title);

    this.props.createPost(newPost);

    this.setState({
      title: '',
    });
  };

  changInputHandler = (event) => {
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
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
            value={this.state.title}
            name="title"
            onChange={this.changInputHandler}
          />
          <button className="btn btn-success" type="submit">
            Add new Post
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
