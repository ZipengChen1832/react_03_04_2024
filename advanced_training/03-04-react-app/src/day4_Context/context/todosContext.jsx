import { createContext, useContext, useReducer, useState } from "react";

const todosData = [
  { id: 1, title: "code" },
  { id: 2, title: "cook" },
];
const TodosContext = createContext(null);

const todosReducer = (todos = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "DELETE_TODO":
      return todos.filter((_todo) => _todo.id !== payload);
    case "ADD_TODO":
      return [...todos, payload];
  }
};

// useReducer
export default function TodosProvider({ children }) {
  const [todos, dispatchTodos] = useReducer(todosReducer, todosData);

  const handleDelete = (id) => {
    dispatchTodos({ type: "DELETE_TODO", payload: id });
  };

  const handleEdit = (id) => {};

  const handleAddTodo = (newTodo) => {
    dispatchTodos({ type: "ADD_TODO", payload: newTodo });
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        handleDelete,
        handleAddTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

// useState
// export default function TodosProvider({ children }) {
//   const [todos, setTodos] = useState(todosData);

//   const handleDelete = (id) => {
//     setTodos((prev) => prev.filter((_todo) => _todo.id !== id));
//   };

//   const handleEdit = (id) => {};

//   const handleAddTodo = (newTodo) => {};

//   return (
//     <TodosContext.Provider
//       value={{
//         todos,
//         handleDelete,
//       }}
//     >
//       {children}
//     </TodosContext.Provider>
//   );
// }

export function useTodos() {
  return useContext(TodosContext);
}
