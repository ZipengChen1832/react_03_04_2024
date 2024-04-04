import React from "react";
import { useDispatch } from "react-redux";
import {
  changeTaskColor,
  deleteTask,
  toggleTaskComplete,
} from "../../redux/reducers/tasksReducer";
import { availableColors } from "../constants/colors";

export default function TasksList({ tasks }) {
  return (
    <div style={{
      height: "200px",
      border: "1px solid black",
      overflowY: "scroll"

    }}>
      {tasks.map((task) => {
        return <TaskRow key={task.id} task={task} />;
      })}
    </div>
  );
}

function TaskRow({ task }) {
  const { id, title, completed, color } = task;

  const dispatch = useDispatch();
  const handleToggleTask = (id) => {
    dispatch(toggleTaskComplete(id));
  };
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };
  const handleChangeColor = (id, newColor) => {
    dispatch(changeTaskColor(id, newColor));
  };

  return (
    <div
      style={{
        display: "flex",
        width: "60%",
        justifyContent: "space-between",
      }}
    >
      <label className="task-row__toggle">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleToggleTask(id)}
        />
        <span>{title}</span>
      </label>
      <div className="task-row__actions">
        <select
          value={color}
          style={{
            color: task.color,
          }}
          onChange={(e) => handleChangeColor(id, e.target.value)}
        >
          <option value={""}></option>
          {availableColors.map((color) => {
            return (
              <option key={color.hex} value={color.hex}>
                {color.name}
              </option>
            );
          })}
        </select>
        <button onClick={() => handleDeleteTask(id)}>X</button>
      </div>
    </div>
  );
}
