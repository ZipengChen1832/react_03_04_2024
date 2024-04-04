import React from "react";

export default function ColorCheckbox({ name, hex, checked, onChange }) {
  return (
    <label
      style={{
        display: "flex",
        gap: "0.2rem"
      }}
    >
      <input type="checkbox" checked={checked} onChange={onChange} />
      <div
        style={{
          display: "inline-block",
          width: "20px",
          backgroundColor: hex,
        }}
      ></div>
      <span>{name}</span>
    </label>
  );
}
