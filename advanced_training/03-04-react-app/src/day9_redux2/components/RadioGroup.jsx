import React, { useMemo } from "react";
import shortid from "shortid";

export default function RadioGroup({ values, value, onChange }) {
  const radioGroupId = useMemo(() => {
    return shortid.generate();
  }, []);

  return (
    <div>
      {values.map((v) => {
        return (
          <div key={v}>
            <input
              type="radio"
              //for now some random stuff
              name={`radio-group-${radioGroupId}`}
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
