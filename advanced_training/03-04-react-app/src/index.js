import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(store);
// console.log(store.getState());
// store.dispatch({ type: "ADD" });
// console.log(store.getState());
// store.dispatch({ type: "toggle_theme" });
// console.log(store.getState());

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
