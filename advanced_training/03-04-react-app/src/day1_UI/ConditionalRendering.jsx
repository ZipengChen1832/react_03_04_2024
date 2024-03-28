import React from "react";

export default function ConditionalRendering() {
  const bool = true;

  //   return bool ? <h1>True</h1> : <h1>False</h1>;

  //   return <div>{bool ? "true" : "false"}</div>;

  return <div bool={bool ? { a: "success" } : { a: "failure" }}></div>;
}
