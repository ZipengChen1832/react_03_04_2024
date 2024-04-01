import React, { Component } from "react";

export default class Posts extends Component {
  state = {
    posts: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data, loading: false });
      });
  }

  render() {
    const { posts, loading } = this.state;

    return (
      <div>
        <h1>Posts</h1>
        <div>
          {loading
            ? "loading..."
            : posts.map((post) => {
                const { id, title, body } = post;
                return (
                  <React.Fragment key={id}>
                    <h3>
                      {id}. {title}
                    </h3>
                    <p>{body}</p>
                  </React.Fragment>
                );
              })}
        </div>
      </div>
    );
  }
}
