import React, { useEffect, useState } from "react";

export default function FunctionLifecycle() {
  const [isShown, setIsShown] = useState(false);
  const toggleVisibility = () => {
    setIsShown((prev) => !prev);
  };
  return (
    <div>
      <h1>Status: The counter is {isShown ? "shown" : "hidden"}</h1>
      <button onClick={toggleVisibility}>{isShown ? "Hide" : "Show"}</button>
      {isShown ? <Counter /> : null}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  //without dependency array = componentDidMount + componentDidUpdate
  //   useEffect(() => {
  //     console.log("component rerendered");
  //   });

  //with empty dep array [], = componentDidMount
  //   useEffect(() => {
  //     console.log("component did mount");
  //   }, []);

  // empty dep arr [] & returning a function = componentDidMount + componentWillUnmount
  //   useEffect(() => {
  //     return () => {
  //       console.log("clean up");
  //     };
  //   }, []);

  //dep arr with variable = componentDidUpdate, but only for that dependencies
//   useEffect(() => {
//     console.log("count updated");
//   }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Add 1</button>
    </div>
  );
}
