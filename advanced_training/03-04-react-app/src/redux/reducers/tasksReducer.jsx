import shortid from "shortid";

const INIT_TASKS = [
  {
    id: shortid.generate(),
    title: "Learn about coding",
    completed: false,
    color: "",
  },
  {
    id: shortid.generate(),
    title: "Cook & clean",
    completed: false,
    color: "",
  },
  {
    id: shortid.generate(),
    title: "Eat",
    completed: false,
    color: "",
  },
  {
    id: shortid.generate(),
    title: "Sleep",
    completed: false,
    color: "",
  },
];

const TASK_ADD = "ADD_TASK";
const TASK_DELETE = "DELETE_TASK";
const TASK_TOGGLE_COMPLETE = "TOGGLE_TASK_COMPLETE";
const TASK_COLOR_CHANGE = "TASK_COLOR_CHANGE";
const TASK_COMPLETE_ALL = "TASK_COMPLETE_ALL";
const TASK_CLEAR_COMPLETED = "TASK_CLEAR_COMPLETED";

export default function tasksReducer(tasks = INIT_TASKS, action) {
  const { type, payload } = action;
  switch (type) {
    case TASK_ADD:
      return [...tasks, payload];
    case TASK_DELETE:
      return tasks.filter((task) => task.id !== payload);
    case TASK_TOGGLE_COMPLETE:
      return tasks.map((task) => {
        if (task.id === payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    case TASK_COLOR_CHANGE:
      const { id, newColor } = payload;
      return tasks.map((task) => {
        if (task.id === id) {
          return { ...task, color: newColor };
        }
        return task;
      });
    case TASK_COMPLETE_ALL:
      return tasks.map((task) => ({ ...task, completed: true }));
    case TASK_CLEAR_COMPLETED:
      return tasks.filter((task) => !task.completed);

    default:
      return tasks;
  }
}

export const addTask = (title) => ({
  type: TASK_ADD,
  payload: {
    id: shortid.generate(),
    title,
    completed: false,
    color: "",
  },
});

export const deleteTask = (id) => ({
  type: TASK_DELETE,
  payload: id,
});

export const toggleTaskComplete = (id) => ({
  type: TASK_TOGGLE_COMPLETE,
  payload: id,
});

export const changeTaskColor = (id, newColor) => ({
  type: TASK_COLOR_CHANGE,
  payload: {
    id,
    newColor,
  },
});

export const completeAllTasks = () => ({ type: TASK_COMPLETE_ALL });

export const clearCompletedTasks = () => ({ type: TASK_CLEAR_COMPLETED });
