import React, { Component } from "react";

const URL = "https://jsonplaceholder.typicode.com/posts";

export default class PostIdClass extends Component {
  state = {
    postId: 1,
    post: {},
  };

  componentDidMount() {
    fetch(`${URL}/${this.state.postId}`)
      .then((res) => res.json())
      .then((post) => {
        this.setState({ post });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prev id", prevState.postId, "curr id", this.state.postId);
    if (prevState.postId !== this.state.postId) {
      fetch(`${URL}/${this.state.postId}`)
        .then((res) => res.json())
        .then((post) => {
          this.setState({ post });
        });
    }
  }

  handleNextPost = () => {
    this.setState({ postId: this.state.postId + 1 });
  };

  render() {
    const { postId, post } = this.state;

    return (
      <div>
        <h1>Curr Post Id: {postId}</h1>
        {/* <button>Prev Post</button> */}
        <button onClick={this.handleNextPost}>Next Post</button>
        <div>
          <h2>Post Title: {post.title}</h2>
          <p>Post Body: {post.body}</p>
        </div>
      </div>
    );
  }
}
