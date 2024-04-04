export default function themeReducer(state = "light", action) {
  switch (action.type) {
    case "change_to_dark": {
      return "dark";
    }
    case "change_to_light": {
      return "light";
    }
    case "toggle_theme": {
      return state === "light" ? "dark" : "light";
    }
    default:
      return state;
  }
}
