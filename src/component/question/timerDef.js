import React, { useState, useEffect } from "react";
import QuesPresentational from "./quesPresentational";

function TimerDef({ ques }) {
  const [seconds, setSeconds] = useState(5);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (seconds >= 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
      if (index < ques.length - 1) {
        setTimeout(() => setIndex(index + 1), 5000);
      }
      //
    } else {
      setSeconds(5);
    }
  }, [seconds]);

  return (
    <span>
      {ques.length && (
        <QuesPresentational
          index={index}
          ques={ques}
          setIndices={setIndex}
          setSec={setSeconds}
        />
      )}
      <div>Timer : {seconds}</div>
    </span>
  );
}

export default TimerDef;
