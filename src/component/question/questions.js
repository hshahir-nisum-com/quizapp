import React, { useState, useEffect } from "react";
import ques from "./quesAns.json";
import "./questions.css";
import { useHistory } from "react-router-dom";
import checkisLogin from "../utilsFunction/checkLogin";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Redux/slicers/quesSlicer";

import TimerDef from "./timerDef";

function Questions() {
  const history = useHistory();
  const dispatch = useDispatch();
  checkisLogin(history);

  useEffect(() => {
    dispatch(actions.ques({ ques }));
  }, []);

  const { questions } = useSelector((state) => ({
    questions: state.quesSlicer.ques,
  }));

  return (
    <div className="question-box">
      <TimerDef ques={questions} />{" "}
    </div>
  );
}

export default Questions;
