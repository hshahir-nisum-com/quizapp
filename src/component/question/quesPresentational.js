import React from "react";
import TimerDef from "./timerDef";

function quesPresentational({ index, ques }) {

    console.log("index :",index)
  return (
    <div>
      <div className="question-container">
        <h3 className="question">Question : {ques[index].ques}</h3>
        <div className="options">
          {ques[index].option.map((optTemp, ind) => {
            return (
              <span className="options-list" key={ind}>
                {" "}
                <input type="radio" value={optTemp} name="opt1" />
                <span className="opt-ques"> {optTemp} </span>
              </span>
            );
          })}
        </div>
      </div>
      <div className="timer-display">
        <TimerDef />{" "}
      </div>
    </div>
  );
}

export default quesPresentational;
