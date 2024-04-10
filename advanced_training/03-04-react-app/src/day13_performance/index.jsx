import React from "react";
import Parent from "./Parent";
import DebounceInput from "./DebounceInput";

export default function Day13() {
  return (
    <>
      <h1>Day 13</h1>
      <Parent />
      <br />
      <br />
      <br />
      <DebounceInput />
    </>
  );
}

// 1. when state changes, the component re-renders
// 2. when parent component re-renders, all children re-render
// 3. when context changes, context consumers re-render