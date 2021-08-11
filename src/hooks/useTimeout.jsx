import React, { useState, useEffect } from "react";
export const UseTimeout = (delay) => {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus(true);
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return status;
};
