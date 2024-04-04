import React from "react";

export default function RadioGroup({ values, value, onChange }) {
  return (
    <div>
      {values.map((v) => {
        return (
          <div key={v}>
            <input
              type="radio"
              //for now some random stuff
              name="dijwqiofhiqwouhfoqiwfj"
              value={v}
              checked={v === value}
              onChange={(e) => {
                onChange(e.target.value);
              }}
            />
            <span>{v}</span>
          </div>
        );
      })}
    </div>
  );
}
