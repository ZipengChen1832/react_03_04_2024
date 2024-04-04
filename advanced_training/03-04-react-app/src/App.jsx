import "./App.css";
import React, { useState } from "react";
import Todo, { foo } from "./day1_UI/Todo";
import ConditionalRendering from "./day1_UI/ConditionalRendering";
import List from "./day1_UI/List";
import Count from "./day2_state/Count";
import ClassCounter from "./day2_state/ClassCounter";
import ClassLifecycle from "./day3_Lifecycle/ClassLifecycle";
import FunctionLifecycle from "./day3_Lifecycle/FunctionLifecycle";
import Day6 from "./day6_HOC";
import Day7 from "./day7_custom_hooks";
import Day8 from "./day8_redux";
import Day9 from "./day9_redux2";

//jsx syntax
//javascript xml
//jsx is a syntax extension for javascript

//babel is a javascript compiler that allows us to write jsx, and convert it to javascript

function App() {
  const [events, setEvents] = useState([]);

  return (
    <div className="App">
      {/* <Count /> */}
      {/* <ClassCounter /> */}
      {/* <FunctionLifecycle /> */}

      {/* <ReducerHook /> */}

      {/* <Day6 /> */}
      {/* <Day7 /> */}
      {/* <Day8 /> */}
      <Day9 />
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
