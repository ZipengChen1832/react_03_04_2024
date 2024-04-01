import { Component } from "react";

//hoc is a function, that receives a component as argument, and returns a new component
export default function withCounter(OldComponent) {
  return class NewComponent extends Component {
    state = {
      count: 0,
    };

    increment = () => {
      this.setState({ count: this.state.count + 1 });
    };
    decrement = () => {
      this.setState({ count: this.state.count - 1 });
    };
    reset = () => {
      this.setState({ count: 0 });
    };

    render() {
      return (
        <OldComponent
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
          reset={this.reset}
          {...this.props}
        />
      );
    }
  };
}
