import React, { createContext, useContext, useState } from "react";
import "./abc.css";

const AbcContext = createContext();
const ThemeContext = createContext();

export default function ABC() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <AbcContext.Provider value={{ count, setCount }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <h1>ABC Prop Drilling</h1>
        <A />
      </ThemeContext.Provider>
    </AbcContext.Provider>
  );
}

function A() {
  const { count, setCount } = useContext(AbcContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <h2>A</h2>
      <div>A's count: {count}</div>
      <button onClick={toggleTheme}>
        Change to {theme === "light" ? "dark theme" : "light theme"}
      </button>
      <button onClick={() => setCount((prev) => prev + 1)}>Add Count</button>
      <B />
    </div>
  );
}

function B() {
  return (
    <div>
      <h2>B</h2>
      {/* <div>B's count: {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Add Count</button> */}
      <C />
    </div>
  );
}

function C() {
  const { count, setCount } = useContext(AbcContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h2>C</h2>
      <div>C's count: {count}</div>
      <button onClick={toggleTheme}>
        Change to {theme === "light" ? "dark theme" : "light theme"}
      </button>
      <button onClick={() => setCount((prev) => prev + 1)}>Add Count</button>
    </div>
  );
}
