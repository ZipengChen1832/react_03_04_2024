import React, { Component } from "react";
import withCounter from "./withCounter";

class Counter extends Component {


  render() {
    const { count, increment, decrement, reset } = this.props;
    return (
      <div>
        <h1>Counter </h1>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button onClick={decrement}>-</button>
          <div>{count}</div>
          <button onClick={increment}>+</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default withCounter(Counter);
