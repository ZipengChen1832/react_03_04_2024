import React, { ChangeEvent, MouseEvent, useState } from "react";

export default function Events() {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {};

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <input value={value} onChange={handleChange} />
    </>
  );
}
