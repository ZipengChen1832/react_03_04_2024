import { useCallback, useMemo, useState } from "react";
import Child from "./Child";

// useMemo is a hook that memoizes the result of a expensive calculation
// use case 1: as above
// use case 2: prevent re-creating the object every time the component re-renders

function Parent() {
  const [bool, toggle] = useState(true);
  const [count, setCount] = useState(0);

  console.log("Parent re-rendered");

  const forceUpdate = () => {
    toggle((prev) => !prev);
  };

  const updateCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const expensiveCalculation = (num) => {
    let result = 0;
    console.log("you just wasted 10 seconds of your life");
    //some operations that take 10 seconds using num

    return num;
  };

  const result = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  //every time Parent rerenders, a new setting object is created (different reference)
  //   const setting = {
  //     a: "a",
  //     b: "b",
  //   };

  const setting = useMemo(() => {
    return {
      a: "a",
      b: "b",
    };
  }, []);

  return (
    <div>
      <h2>Parent: {count}</h2>
      <div>{bool ? "true" : "false"}</div>
      <div>
        <button onClick={forceUpdate}>Rerender Parent (meaningless)</button>
        <br />
        <button onClick={updateCount}>Update Count (meaningful)</button>
      </div>
      <Child count={count} setting={setting} updateCount={updateCount} />
    </div>
  );
}

export default Parent;
