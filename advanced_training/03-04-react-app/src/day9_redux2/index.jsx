import React from "react";
import { useSelector } from "react-redux";

import NewTaskForm from "./components/NewTaskForm";
import TasksList from "./components/TasksList";
import ControlPanel from "./components/ControlPanel";
import {
  STATUS_ACTIVE,
  STATUS_ALL,
  STATUS_COMPLETE,
} from "../redux/reducers/filterReducer";

export default function Day9() {
  const tasks = useSelector((state) => state.tasks);
  const { colors: filterColorsHex, status } = useSelector(
    (state) => state.filter
  );

  const filteredTasks = tasks.filter((task) => {
    const filterByColor =
      filterColorsHex.length === 0 || filterColorsHex.includes(task.color);
    let filterByStatus;
    switch (status) {
      case STATUS_ALL:
        filterByStatus = true;
        break;
      case STATUS_ACTIVE:
        filterByStatus = task.completed === false;
        break;
      case STATUS_COMPLETE:
        filterByStatus = task.completed === true;
        break;
      default:
        break;
    }

    // const filterByStatus = status === STATUS_ALL ? true : STATUS_ACTIVE ?

    return filterByColor && filterByStatus;
  });

  return (
    <div>
      <h1>Day 9 Redux 2</h1>
      <NewTaskForm />
      <TasksList tasks={filteredTasks} />
      <ControlPanel />
    </div>
  );
}
