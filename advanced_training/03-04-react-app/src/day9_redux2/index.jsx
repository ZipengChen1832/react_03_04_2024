import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import NewTaskForm from "./components/NewTaskForm";
import TasksList from "./components/TasksList";
import ControlPanel from "./components/ControlPanel";
import {
  STATUS_ACTIVE,
  STATUS_ALL,
  STATUS_COMPLETE,
} from "../redux/reducers/filterReducer";
import { getTasksAsync } from "../redux/reducers/tasksReducer";

export default function Day9() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasksAsync());
  }, []);

  const { colors: filterColorsHex, status } = useSelector(
    (state) => state.filter
  );

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
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
  }, [tasks, filterColorsHex, status]);

  return (
    <div>
      <h1>Day 9 Redux 2</h1>
      <NewTaskForm />
      <TasksList tasks={filteredTasks} />
      <ControlPanel />
    </div>
  );
}
