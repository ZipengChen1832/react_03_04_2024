export const STATUS_ALL = "STATUS_ALL";
export const STATUS_ACTIVE = "STATUS_ACTIVE";
export const STATUS_COMPLETE = "STATUS_COMPLETE";

const FILTER_ADD_COLOR = "FILTER_ADD_COLOR";
const FILTER_REMOVE_COLOR = "FILTER_REMOVE_COLOR";
const FILTER_CHANGE_STATUS = "FILTER_CHANGE_STATUS";

export default function filterReducer(
  state = {
    colors: [],
    status: STATUS_ALL,
  },
  action
) {
  const { type, payload } = action;
  const { colors, status } = state;
  switch (type) {
    case FILTER_ADD_COLOR:
      return { ...state, colors: [...colors, payload] };
    case FILTER_REMOVE_COLOR:
      //payload is the hex code for color
      return { ...state, colors: colors.filter((color) => color !== payload) };

    case FILTER_CHANGE_STATUS:
      return { ...state, status: payload };

    default:
      return state;
  }
}

export const addColorFilter = (colorHex) => ({
  type: FILTER_ADD_COLOR,
  payload: colorHex,
});

export const removeColorFilter = (colorHex) => ({
  type: FILTER_REMOVE_COLOR,
  payload: colorHex,
});

export const changeFilterStatus = (newStatus) => ({
  type: FILTER_CHANGE_STATUS,
  payload: newStatus,
});
