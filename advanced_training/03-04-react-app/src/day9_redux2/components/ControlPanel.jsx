import React, { useEffect, useState } from "react";
import "./controlPanel.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCompletedTasks,
  completeAllTasks,
} from "../../redux/reducers/tasksReducer";
import { availableColors } from "../constants/colors";
import ColorCheckbox from "./ColorCheckbox";
import {
  STATUS_ACTIVE,
  STATUS_ALL,
  STATUS_COMPLETE,
  addColorFilter,
  changeFilterStatus,
  removeColorFilter,
} from "../../redux/reducers/filterReducer";
import RadioGroup from "./RadioGroup";

export default function ControlPanel() {
  const tasks = useSelector((state) => state.tasks);
  const { colors: filterColorsHex, status } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();

  // console.log(filterColorsHex);
  const remaining = tasks.filter((task) => !task.completed).length;

  const handleCompleteAll = () => {
    dispatch(completeAllTasks());
  };
  const handleClearCompleted = () => {
    dispatch(clearCompletedTasks());
  };
  const handleAddColorFilter = (colorHex) => {
    dispatch(addColorFilter(colorHex));
  };

  const handleRemoveColorFilter = (colorHex) => {
    dispatch(removeColorFilter(colorHex));
  };

  return (
    <div className="control-panel">
      <div className="control-panel__column">
        <b>Actions</b>
        <button onClick={handleCompleteAll}>Mark All Completed</button>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
      <div className="control-panel__column">
        <b>Remaining Tasks</b>
        <div>{remaining}</div>
      </div>
      <div className="control-panel__column">
        <b>Filter By Status</b>
        <RadioGroup
          values={[STATUS_ALL, STATUS_ACTIVE, STATUS_COMPLETE]}
          value={status}
          onChange={(newStatus) => {
            dispatch(changeFilterStatus(newStatus));
          }}
        />
      </div>
      <div className="control-panel__column">
        <b>Filter By Colors</b>
        {availableColors.map((color) => {
          const isChecked = filterColorsHex.includes(color.hex);
          return (
            <ColorCheckbox
              key={color.hex}
              name={color.name}
              hex={color.hex}
              checked={isChecked}
              onChange={
                isChecked
                  ? () => handleRemoveColorFilter(color.hex)
                  : () => handleAddColorFilter(color.hex)
              }
            />
          );
        })}
      </div>
    </div>
  );
}
