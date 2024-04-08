import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addCountAsync,
  getCountAsync,
  minusCountAsync,
} from "../redux/reducers/countReducer";

export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountAsync());
  }, []);

  const handleMinus = () => {
    dispatch(minusCountAsync());
  };

  const handleAdd = async () => {
    dispatch(addCountAsync());
  };

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
    </div>
  );
}
