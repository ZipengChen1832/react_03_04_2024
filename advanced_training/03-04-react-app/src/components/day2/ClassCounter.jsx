import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      theme: "black",
    };
  }

  // handleAdd() {
  //   this.setState({ count: this.state.count + 1 });
  // }

  handleAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Class Counter</h1>
        <div>Count: {this.state.count}</div>
        <button
          // onClick={() => {
          //   this.handleAdd();
          // }}
          // onClick={this.handleAdd.bind(this)}
          onClick={this.handleAdd}
        >
          Add count
        </button>
      </div>
    );
  }
}

export default ClassCounter;
