import React, { useState,useEffect } from "react";
import ques from "./quesAns.json";
import "./questions.css";
import { useHistory } from "react-router-dom";

function Questions() {
  const [index, setIndex] = useState(0);
  const [seconds, setSeconds] = React.useState(10);
  const history = useHistory();
  if (localStorage.getItem("isUserLoging") !== "true") {
    console.log("in if cond");
    history.push("/");
  } else {
    console.log("in else cond");
  }
  setTimeout(() => {
    if (index < ques.length - 1) {
      setIndex(index + 1);
    }
  }, 10000);


  useEffect(() => {
    if (seconds >= 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(10)
    }
  });

  return (
    <div className="question-box">
      <div className="question-container">
      {
        <span>
          <h3 className="question">Question : {ques[index].ques}</h3>
          <div>
            {ques[index].option.map((optTemp, ind) => {
              return (
                <span className="options-list" key={ind}>
                  {" "}
                  <input type="radio" value="Male" name="opt1" /> {optTemp}{" "}
                  <br />
                </span>
              );
            })}
          </div>
        </span>
      }
      </div>
      <div className="timer-display">
        Timer : {seconds}
      </div>
    </div>
  );
}

export default Questions;
