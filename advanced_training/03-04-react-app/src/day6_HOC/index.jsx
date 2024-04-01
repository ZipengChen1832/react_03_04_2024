import React, { Component } from "react";
import Counter from "./hoc/Counter";
import Stock from "./hoc/Stock";
import Posts from "./hoc/Posts";

export default function Day6() {
  return (
    <React.Fragment>
      {/* <Counter />
      <Stock symbol={"NVIDIA"} /> */}
      <Posts />
    </React.Fragment>
  );
}
