import React, { useReducer } from "react";

//action: {type:string, payload: any}
//old state in, new state out
function countReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    case "ADD_BY":
      return state + action.payload;
    default:
      return state;
  }
}

export default function ReducerHook() {
  // const [state, setState] = useState(initValue)
  const [count, dispatch] = useReducer(countReducer, 10);

  function addCount() {
    dispatch({ type: "ADD" });
  }

  function minusCount() {
    dispatch({ type: "MINUS" });
  }

  function addBy(amount) {
    dispatch({ type: "ADD_BY", payload: amount });
  }

  return (
    <div>
      <h1>Reducer Counter</h1>
      <div>Count: {count}</div>
      <button onClick={addCount}>Add</button>
      <button onClick={minusCount}>Minus</button>
      <button onClick={() => addBy(5)}>Add By </button>
    </div>
  );
}
