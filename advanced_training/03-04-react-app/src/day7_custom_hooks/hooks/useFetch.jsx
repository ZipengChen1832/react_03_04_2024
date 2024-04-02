import React, { useEffect, useState } from "react";

export default function useFetch(API_URL) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log("err", err);
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [API_URL]);

  return {
    data,
    isLoading,
    error,
  };
}
