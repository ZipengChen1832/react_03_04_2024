import countAPI from "../../day11_redux3/mockAPI/count";

export default function countReducer(state = 0, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_COUNT":
      return payload;
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    case "ADD_BY":
      return state + payload;
    default:
      return state;
  }
}

export function addCountAsync() {
  return async (dispatch) => {
    await countAPI.addCount();
    setTimeout(() => {
      dispatch(addCount());
    }, 100);
  };
}

export function minusCountAsync() {
  return async (dispatch) => {
    await countAPI.minusCount();
    setTimeout(() => {
      dispatch(minusCount());
    }, 100);
  };
}
export function getCountAsync() {
  return async (dispatch) => {
    const count = await countAPI.getCount();
    setTimeout(() => {
      dispatch(setCount(count));
    }, 100);
  };
}

export function addCount() {
  return { type: "ADD" };
}

export function minusCount() {
  return { type: "MINUS" };
}

export function setCount(count) {
  return { type: "SET_COUNT", payload: count };
}
