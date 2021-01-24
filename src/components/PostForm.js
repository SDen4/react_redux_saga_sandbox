import React from 'react';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    const { title } = this.state;
    const newPost = { title, id: Date.now().toString() };
    console.log(newPost);

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
