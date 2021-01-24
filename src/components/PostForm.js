import React from 'react';
import { connect } from 'react-redux';

import { createPost, showAlert } from '../redux/actions';

import { Alert } from './Alert';

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
    if (!title.trim())
      return this.props.showAlert(
        'Post title can not be empty, please text the name.',
      );

    const newPost = { title, id: Date.now().toString() };

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
      <>
        {/* Alert */}
        {this.props.alert && <Alert text={this.props.alert} />}
        {/* Form */}
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
      </>
    );
  }
}

const mapDispatchToProps = {
  createPost,
  showAlert,
};

const mapStateToProps = (state) => ({
  alert: state.loading.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
