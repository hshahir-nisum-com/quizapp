import React, { useState } from "react";
import TimerDef from "./timerDef";
import "./quesPresentational.css";
function QuesPresentational({ index, ques, setIndices, setSec }) {
  const [Selected, setSelected] = useState([]);
  const [radio, setRadio] = useState("");

  console.log("index :", Selected);
  return (
    <div>
      {index < 3 ? (
        <div className="question-container">
          <h3 className="question">Question : {ques[index].ques}</h3>
          <div className="options">
            {ques[index].option.map((optTemp, ind) => {
              return (
                <span className="options-list" key={ind}>
                  {" "}
                  <input
                    name="radio"
                    type="radio"
                    value={optTemp}
                    onChange={(e) => setRadio(e.target.value)}
                  />
                  <span className="opt-ques"> {optTemp} </span>
                </span>
              );
            })}
          </div>
          <input
            type="Button"
            name="Button"
            value="NEXT"
            className="button"
            onClick={() => {
              setIndices(index + 1);
              setSelected([...Selected, radio]);
              setSec(0)
            }}
          />
        </div>
      ) : (
        console.log("test over")
      )}
      <div className="timer-display"></div>
    </div>
  );
}

export default QuesPresentational;
