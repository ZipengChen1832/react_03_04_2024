import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

export default function NotFoundPage() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const id = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      {countdown < 0 ? (
        <Redirect to="/" />
      ) : (
        <h1>Not Found, redirecting in {countdown} seconds</h1>
      )}
    </div>
  );
}

// export default function NotFoundPage() {
//   const history = useHistory();
//   const [countdown, setCountdown] = useState(3);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCountdown((prev) => prev - 1);
//     }, 1000);

//     return () => {
//       clearInterval(id);
//     };
//   }, []);

//   useEffect(() => {
//     if (countdown < 0) {
//       history.push("/");
//     }
//   }, [countdown]);

//   return (
//     <div>
//       <h1>Not Found, redirecting in {countdown} seconds</h1>
//     </div>
//   );
// }
