import React, { useCallback, useState } from "react";

//Higher order component is a function that takes a component and returns a new component
//Higher order function is a function that takes a function and returns a new function

const debounce = (cb, delay = 1000) => {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

export default function DebounceInput() {
  const [query, setQuery] = useState("");

  const getSuggestions = useCallback(
    debounce((query) => {
      // fetch("example.com") $10 with each search
      console.log("$10 wasted");
    }),
    []
  );

  return (
    <div>
      <h1>Debounce Input</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          getSuggestions(e.target.value);
        }}
      />
    </div>
  );
}
