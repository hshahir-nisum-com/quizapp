import React, { useState, useEffect } from "react";
import ques from "./quesAns.json";
import "./questions.css";
import { useHistory } from "react-router-dom";
import checkisLogin from "../utilsFunction/checkLogin";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Redux/slicers/quesSlicer";
import QuesPresentational from "./quesPresentational";

function Questions() {
  const [index, setIndex] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.ques({ ques }));
    console.log("In Use Effect :",index)
    setTimeout(() => {
      if (index < ques.length ) {
        setIndex(index + 1);
      }
    }, 10000);
  }, []);

  const { questions } = useSelector((state) => ({
    questions: state.quesSlicer.ques,
  }));

  console.log("questions :", questions);
  checkisLogin(history);

  return (
    <div className="question-box">
      {questions.length && (
        <QuesPresentational index={index} ques={questions} />
      )}
    </div>
  );
}

export default Questions;
