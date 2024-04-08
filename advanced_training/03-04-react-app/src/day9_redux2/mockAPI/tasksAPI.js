import shortid from "shortid";

const tasks = [
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

const getTasks = async () => {
  return {
    success: true,
    msg: "Got tasks",
    data: structuredClone(tasks),
  };
};

const addTask = async (title) => {
  const newTask = {
    id: shortid.generate(),
    title,
    completed: false,
    color: "",
  };
  tasks.push(newTask);
  return {
    success: true,
    msg: "New Task Created",
    data: newTask,
  };
};

const deleteTask = async (id) => {
  const index = tasks.findIndex((task) => task.id === id);
  tasks.splice(index, 1);
  return {
    success: true,
    msg: "task is deleted",
    data: id,
  };
};

const toggleTaskComplete = async (id) => {
  const index = tasks.findIndex((task) => task.id === id);
  tasks[index].completed = !tasks[index].completed;

  return {
    success: true,
    msg: "task is toggled",
    data: tasks[index],
  };
};

const setTaskColor = async (id, newColor) => {
  const task = tasks.find((task) => task.id === id);
  task.color = newColor;
  return {
    success: true,
    msg: "task color set to" + newColor,
    data: task,
  };
};

export default {
  getTasks,
  deleteTask,
  addTask,
  toggleTaskComplete,
  setTaskColor
};
