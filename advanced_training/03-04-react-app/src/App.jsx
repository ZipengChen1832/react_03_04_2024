import "./App.css";
import React from "react";
import Todo, { foo } from "./components/day1_UI/Todo";
import ConditionalRendering from "./components/day1_UI/ConditionalRendering";
import List from "./components/day1_UI/List";
import Count from "./components/day2_state/Count";
import ClassCounter from "./components/day2_state/ClassCounter";
import ClassLifecycle from "./components/day3_Lifecycle/ClassLifecycle";
import FunctionLifecycle from "./components/day3_Lifecycle/FunctionLifecycle";

//jsx syntax
//javascript xml
//jsx is a syntax extension for javascript

//babel is a javascript compiler that allows us to write jsx, and convert it to javascript

function App() {
  return (
    <div className="App">
      {/* <Count /> */}
      {/* <ClassCounter /> */}
      <FunctionLifecycle />
    </div>
  );
}

// function DocRow({ text, isActive = false }) {
//   return (
//     <div
//       style={{
//         color: isActive ? "red" : "black",
//         backgroundColor: isActive ? "black" : "white",
//       }}
//     >
//       {text}
//     </div>
//   );
// }

export default App;
