import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/reducers/tasksReducer";

export default function NewTaskForm() {
  const [newTaskTitle, setNewTaskTile] = useState("");
  const dispatch = useDispatch();

  const handleAddNewTask = (title) => {
    dispatch(addTask(title));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddNewTask(newTaskTitle);
        setNewTaskTile("");
      }}
    >
      <input
        required
        value={newTaskTitle}
        onChange={(e) => setNewTaskTile(e.target.value)}
      />
      <button>Add New Task</button>
    </form>
  );
}
