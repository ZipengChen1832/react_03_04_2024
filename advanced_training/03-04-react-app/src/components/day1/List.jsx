import React from "react";

const data = [1, 2, 3, 4];

export default function List() {
  return (
    <div>
      {data.map((elem, index) => {
        //should we use the index or not
        return <div key={elem}>{elem}</div>;
      })}
    </div>
  );
}
