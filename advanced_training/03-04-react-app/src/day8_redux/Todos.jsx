import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./redux/reducers/todosReducer";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  function handleAddTodo() {
    dispatch(addTodo(title));
  }

  function handleDelete(id) {
    dispatch(deleteTodo(id));
  }

  return (
    <div>
      <h2>Todos</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <div>{todo.title}</div>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
