import React, { useState } from "react";
import useCounter from "../hooks/useCounter";
import useLog from "../hooks/useLog";

export default function Counter() {
  const [count, increment, decrement, reset] = useCounter();
  useLog();

  //   const { reset, count, decrement, increment } = useCounter();
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
