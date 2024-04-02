import React, { useEffect } from "react";

export default function useLog(dep) {
  useEffect(() => {
    console.log("component rerendered");
  });
}
