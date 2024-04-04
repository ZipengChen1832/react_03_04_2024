import React from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodosList from "./components/TodosList";
import ControlPanel from "./components/ControlPanel";

export default function Day9() {
  return (
    <div>
      <h1>Day 9 Redux 2</h1>
      <NewTodoForm />
      <TodosList />
      <ControlPanel />
    </div>
  );
}
