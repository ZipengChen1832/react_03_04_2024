import React, { Component } from "react";


const URL = "https://jsonplaceholder.typicode.com/posts";

export default class PostsClass extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch(URL)
      .then((res) => res.json())
      .then((posts) => {
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <div>
          {this.state.posts.map((post) => {
            return (
              <div key={post.id}>
                <h2>{post.id}</h2>
                <p>{post.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
