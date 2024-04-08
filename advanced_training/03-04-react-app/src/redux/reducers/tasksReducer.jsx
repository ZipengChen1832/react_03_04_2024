import tasksAPI from "../../day9_redux2/mockAPI/tasksAPI";

const INIT_TASKS = [];

const TASKS_SET = "TASKS_SET";
const TASK_ADD = "ADD_TASK";
const TASK_DELETE = "DELETE_TASK";
const TASK_TOGGLE_COMPLETE = "TOGGLE_TASK_COMPLETE";
const TASK_COLOR_CHANGE = "TASK_COLOR_CHANGE";
const TASK_COMPLETE_ALL = "TASK_COMPLETE_ALL";
const TASK_CLEAR_COMPLETED = "TASK_CLEAR_COMPLETED";

export default function tasksReducer(tasks = INIT_TASKS, action) {
  const { type, payload } = action;
  switch (type) {
    case TASKS_SET:
      return payload;
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

export const getTasksAsync = () => async (dispatch) => {
  const { data: tasks } = await tasksAPI.getTasks();
  dispatch(setTasks(tasks));
};

export const addTaskAsync = (title) => async (dispatch) => {
  const { data: newTask } = await tasksAPI.addTask(title);
  dispatch(addTask(newTask));
};

export const deleteTaskAsync = (id) => async (dispatch) => {
  await tasksAPI.deleteTask(id);
  dispatch(deleteTask(id));
};

export const toggleTaskCompleteAsync = (id) => async (dispatch) => {
  await tasksAPI.toggleTaskComplete(id);
  dispatch(toggleTaskComplete(id));
};

export const changeTaskColorAsync = (id, newColor) => async (dispatch) => {
  await tasksAPI.setTaskColor(id, newColor);
  dispatch(changeTaskColor(id, newColor));
};


const setTasks = (tasks) => ({
  type: TASKS_SET,
  payload: tasks,
});

const addTask = (newTask) => ({
  type: TASK_ADD,
  payload: newTask,
});

const deleteTask = (id) => ({
  type: TASK_DELETE,
  payload: id,
});

const toggleTaskComplete = (id) => ({
  type: TASK_TOGGLE_COMPLETE,
  payload: id,
});

const changeTaskColor = (id, newColor) => ({
  type: TASK_COLOR_CHANGE,
  payload: {
    id,
    newColor,
  },
});



export const completeAllTasks = () => ({ type: TASK_COMPLETE_ALL });

export const clearCompletedTasks = () => ({ type: TASK_CLEAR_COMPLETED });
