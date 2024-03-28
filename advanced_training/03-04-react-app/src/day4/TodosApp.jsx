import React, { useState } from "react";
import TodosProvider, { useTodos } from "./context/todosContext";

export default function TodosApp() {
  return (
    <TodosProvider>
      <h1>Todo List</h1>
      <NewTodoForm />
      <Todos />
    </TodosProvider>
  );
}

function NewTodoForm() {
  const [title, setTitle] = useState(0);
  const { handleAddTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo({
      //usually the id should be generated in the server, so i'll hard code it here, never use Math.random for id
      title,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

function Todos() {
  const { todos } = useTodos();
  return (
    <ul>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </ul>
  );
}

function Todo({ todo }) {
  const { handleDelete } = useTodos();
  const { title, details, id } = todo;

  return (
    <li>
      <h3>{title}</h3>
      <div>{details}</div>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
}
