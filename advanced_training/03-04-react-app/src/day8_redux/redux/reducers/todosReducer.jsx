import shortid from "shortid";

//reducer: a pure function that receives a previous and an action, then return a new state
export default function todosReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case "DELETE_TODO":
      return state.filter((_todo) => _todo.id !== payload);
    case "ADD_TODO":
      return [...state, payload];
    default:
      return state;
  }
}

export function addTodo(title) {
  return {
    type: "ADD_TODO",
    payload: {
      id: shortid.generate(),
      title,
    },
  };
}

export function deleteTodo(id) {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
}
