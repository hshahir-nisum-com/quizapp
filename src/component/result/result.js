import React from "react";
import { useSelector } from "react-redux";
import './result.css'

function Result(props) {
  const { Selected } = props.location.state;
  const { questions } = useSelector((state) => ({
    questions: state.quesSlicer.ques,
  }));

  let temp = 0;

  console.log("right ans", questions);
  function compareArrays(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i].rightAns === arr2[i]) {
        temp = temp + 5;
      }
    }
    return temp;
  }

  const result = compareArrays(questions, Selected);
  let percent = (result / 15) * 100;
  console.log("result :", percent);
  return (
    <div className="wrapper">
      <h1>You Got {percent.toFixed(2)}%</h1>
    </div>
  );
}

export default Result;
