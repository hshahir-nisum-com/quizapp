import React, { useState, useEffect } from "react";

function TimerDef() {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds >= 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(5);
    }
  }, [seconds]);

  return <div>Timer : {seconds}</div>;
}

export default TimerDef;
