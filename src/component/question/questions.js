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
  checkisLogin(history);

  setTimeout(() => {
    if (index < ques.length - 1) {
      setIndex(index + 1);
    }
  }, 5000);

  useEffect(() => {
    dispatch(actions.ques({ ques }));
  }, []);

  const { questions } = useSelector((state) => ({
    questions: state.quesSlicer.ques,
  }));

  return (
    <div className="question-box">
      {questions.length && (
        <QuesPresentational index={index} ques={questions} setIndexs = {setIndex}/>
      )}
    </div>
  );
}

export default Questions;
