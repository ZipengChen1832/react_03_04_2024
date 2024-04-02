import React, { Component } from "react";
import withCounter from "../hoc/withCounter";

class Stock extends Component {
  render() {
    const {
      symbol,
      count: shares,
      increment: handleBuy,
      decrement: handleSell,
    } = this.props;
    return (
      <div>
        <h1>Buy and Sell Stock</h1>
        <div>
          <h3>
            {symbol}: {shares}
          </h3>
          <button onClick={handleBuy}>Buy</button>
          <button onClick={handleSell}>Sell</button>
        </div>
      </div>
    );
  }
}

export default withCounter(Stock);
