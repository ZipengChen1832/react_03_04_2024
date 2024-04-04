import { combineReducers } from "redux";
import countReducer from "./countReducer";
import themeReducer from "./themeReducer";
import todosReducer from "./todosReducer";
import tasksReducer from "./tasksReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  count: countReducer,
  theme: themeReducer,
  todos: todosReducer,
  tasks: tasksReducer,
  filter: filterReducer,
});

export default rootReducer;
