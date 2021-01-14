import React  from "react";
import "./quesPresentational.css";
import TimerDef from "./timerDef";

function QuesPresentational({ ques, index, onSelect, onNext, sec, selected }) {
  return (
    <div>
       <div className="question-container">
         {console.log("Index :",index)}
          <h3 className="question">Question {index + 1} : {ques[index].ques}</h3>
          <div className="options">
            {ques[index].option.map((optTemp, ind) => {
              return (
                <span className="options-list" key={ind}>
                  {" "}
                  <input
                    name="radio"
                    type="radio"
                    className="radioId"
                    value={optTemp}
                    checked={selected[index] === optTemp}
                    onChange={(e) => onSelect(e.target.value, index)}
                  />
                  <span className="opt-ques"> {optTemp} </span>
                </span>
              );
            })}
          </div>
          <input
            type="Button"
            name="Button"
            className="button"
            value="NEXT"
            onClick={() => onNext(index + 1)}
          />
          <TimerDef indices={index} sec={sec} />
        </div>
    </div>
  );
}

export default QuesPresentational;
