import React, { useState, useEffect } from "react";

function TimerDef() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds >= 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(10);
    }
  }, [seconds]);

  return <div>Timer : {seconds}</div>;
}

export default TimerDef;
