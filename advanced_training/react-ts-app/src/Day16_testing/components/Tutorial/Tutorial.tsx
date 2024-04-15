import React from "react";

interface TutorialProps {
  onClick?: () => void;
}

export default function Tutorial({ onClick }: TutorialProps) {
  return (
    <div>
      <h1>Tutorial</h1>
      <button onClick={onClick || (() => {})} role="button">
        Click
      </button>
    </div>
  );
}
