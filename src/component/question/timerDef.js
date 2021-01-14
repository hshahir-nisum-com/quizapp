import React, { useState, useEffect, useRef } from "react";

function TimerDef({ indices, sec }) {
  const [seconds, setSeconds] = useState(sec);

  let t = useRef(null);

  useEffect(() => {
    clearTimeout(t.current);
    setSeconds(sec);
  }, [indices]);

  useEffect(() => {
    if (seconds > 0) {
      t.current = setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  }, [seconds]);

  return (
    <span>
      <div>Timer : {seconds}</div>
    </span>
  );
}

export default TimerDef;
