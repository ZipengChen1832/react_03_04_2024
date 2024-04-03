export default function countReducer(state = 0, action) {
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

export function addCount() {
  return { type: "ADD" };
}
