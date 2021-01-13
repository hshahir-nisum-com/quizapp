import React, { useState, useEffect } from "react";
import "./testList.css";
import data from "./subject.json";
import { useHistory } from "react-router-dom";
import Utility from "./utils";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Redux/slicers/testListSlicer";
import checkisLogin from "../utilsFunction/checkLogin";
 
function TestList() {
  const history = useHistory();
  const [inputkey, setinputKey] = useState("");
  const dispatch = useDispatch();
  let testList = useSelector((state) => state.testListSlicer.testList);
  let keys = useSelector((state) => state.testListSlicer.keys);
  
  checkisLogin(history);

  useEffect(() => {
    data.map(({ Subject, key }) => {
      dispatch(actions.tests(Subject));
      dispatch(actions.keys(key));
    });
  }, []);

  return (
    <div className="testToBeGiven">
      <h1 className="test-list-heading">Given test list</h1>
      <div
        className="js-test"
        onClick={() => {
          document.getElementById("text").style.display = "block";
        }}
      >
        {testList.map((list) => list)}
      </div>
      <input
        type="text"
        id="text"
        className="text-test"
        placeholder="Please Enter test key"
        data-testid="text-box"
        onChange={(e) => {
          setinputKey(e.target.value);
        }}
        onBlur={() => {
          Utility(inputkey, history, keys);
        }}
      />
    </div>
  );
}

export default TestList;
