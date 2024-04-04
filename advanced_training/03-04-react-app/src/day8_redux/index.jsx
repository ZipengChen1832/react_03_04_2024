import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "./Todos";
import { addCount } from "../redux/reducers/countReducer";

export default function Day8() {
  const count = useSelector((state) => state.count);
  const todos = useSelector((state) => state.todos);
  const theme = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(addCount());
  }

  function handleMinus() {
    dispatch({ type: "MINUS" });
  }

  function toggleTheme() {
    dispatch({ type: "toggle_theme" });
  }

  return (
    <div>
      <h1>Day 8 Redux</h1>
      <input type="checkbox" />
      {/* {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))} */}
      <div>Theme: {theme}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div>Count: {count}</div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleMinus}>Minus</button>
      <Todos />
    </div>
  );
}
