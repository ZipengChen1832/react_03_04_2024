import React, { Component, createRef } from "react";
import PostsClass from "./PostsClass";
import PostIdClass from "./PostIdClass";

export default class ClassLifecycle extends Component {
  state = {
    isShown: false,
  };

  toggleVisibility = () => {
    this.setState({ isShown: !this.state.isShown });
  };

  render() {
    const { isShown } = this.state;
    return (
      <div>
        <h1>Status: The counter is {isShown ? "shown" : "hidden"}</h1>
        <button onClick={this.toggleVisibility}>
          {isShown ? "Hide" : "Show"}
        </button>
        {isShown ? <Counter /> : null}
        {/* <PostIdClass /> */}
      </div>
    );
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
    // console.log("constructor");
  }

  state = {
    count: 0,
  };

  //   componentDidMount() {
  //     const intervalId = setInterval(() => {
  //       console.log(this.state.count);
  //     }, 1000);

  //     this.intervalId = intervalId;
  //   }
  //   componentWillUnmount() {
  //     clearInterval(this.intervalId);
  //   }

  componentDidMount() {
    // document.title = "count:"
    this.titleRef.current = document.title;
    document.title = `Count: ${this.state.count}`;
    // console.log("component did mount");
  }

  componentDidUpdate() {
    document.title = `Count: ${this.state.count}`;
    // console.log("component did update");
  }

  componentWillUnmount() {
    // console.log("component will unmount");
    document.title = this.titleRef.current;
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    // console.log("render");
    const { count } = this.state;
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={this.increment}>Add 1</button>
      </div>
    );
  }
}
