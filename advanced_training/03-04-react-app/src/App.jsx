import "./App.css";
import React from "react";
import Todo, { foo } from "./components/day1/Todo";
import ConditionalRendering from "./components/day1/ConditionalRendering";
import List from "./components/day1/List";

//jsx syntax
//javascript xml
//jsx is a syntax extension for javascript

//babel is a javascript compiler that allows us to write jsx, and convert it to javascript

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>

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
