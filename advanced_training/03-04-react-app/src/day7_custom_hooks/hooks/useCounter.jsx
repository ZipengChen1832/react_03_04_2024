import React, { useState } from "react";

const INIT_COUNT = 0;

//the function has to start with "use" in lowercase
export default function useCounter() {
  //hooks can only be used inside a function component, or a custom hook

  const [count, setCount] = useState(INIT_COUNT);
  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrement() {
    setCount((prev) => prev - 1);
  }
  function reset() {
    setCount(INIT_COUNT);
  }

  return [count, increment, decrement, reset];

  return {
    count,
    increment,
    decrement,
    reset,
  };
}
