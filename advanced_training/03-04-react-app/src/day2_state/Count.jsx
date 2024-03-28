import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);
  const [input, setInput] = useState(15);

  // console.log("component rerendered");

  function handleAdd() {
    // setCount(count + 1);
    // setCount((prev) => {
    //   return prev + 1;
    // });
  }

  function addRandNum() {
    const num = Math.floor(Math.random() * 10);
    // const newNumbers = [...numbers, num];
    // setNumbers(newNumbers);

    setNumbers((prev) => {
      return [...prev, num];
    });
  }

  function removeNumbBiggerThan(cap) {
    // const newNumbers = numbers.filter((num) => num < cap);
    // setNumbers(newNumbers);

    setNumbers((prev) => prev.filter((num) => num < cap));
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleAdd}>add</button>
      <h2>Numbers Array</h2>
      <div>
        {numbers.map((number, index) => (
          <div key={index}>{number}</div>
        ))}
      </div>
      <button onClick={addRandNum}>Add a random number to array</button>
      <br />
      <input
        type="number"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          removeNumbBiggerThan(input);
        }}
      >
        Remove numbers bigger than
      </button>
    </div>
  );
}
