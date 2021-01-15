import React, { useState, useEffect, useRef } from "react";
import ques from "./quesAns.json";
import "./questions.css";
import { useHistory } from "react-router-dom";
import checkisLogin from "../utilsFunction/checkLogin";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Redux/slicers/quesSlicer";
import QuesPresentational from "./quesPresentational";

function Questions() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState([]);
  let timer = useRef(null);
  const howManySeconds = 3;
  checkisLogin(history);

  useEffect(() => {
    dispatch(actions.ques(ques[history.location.pathname]));
  }, []);

  const { questions } = useSelector((state) => ({
    questions: state.quesSlicer.ques,
  }));

  console.log("questions: ", questions);
  useEffect(() => {
    if (!questions.length) return;
    clearTimeout(timer.current);
    if (index >= questions.length) {
      onNext();
    }

    if (index < questions.length) {
      timer.current = setTimeout(() => {
        setIndex(index + 1);
      }, howManySeconds * 1000);
    }
  }, [index, questions]);

  const onSelect = (value, index) => {
    let updateSelect = selected.slice();
    updateSelect[index] = value;
    setSelected(updateSelect);
  };

  const onNext = (index) => {
    if (index < questions.length) {
      setIndex(index);
    } else {
      history.push({
        pathname: "/result",
        state: {
          Selected: selected,
        },
      });
    }
  };

  return (
    <div className="question-box">
      {questions.length > index ? (
        <QuesPresentational
          ques={questions}
          index={index}
          onSelect={onSelect}
          onNext={onNext}
          selected={selected}
          sec={howManySeconds}
        />
      ) : null}
    </div>
  );
}

export default Questions;
