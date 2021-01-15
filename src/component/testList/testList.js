import React, { useEffect } from "react";
import "./testList.css";
import data from "./subject.json";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Redux/slicers/testListSlicer";
import checkisLogin from "../utilsFunction/checkLogin";

function TestList() {
  const history = useHistory();
  const dispatch = useDispatch();
  let testList = useSelector((state) => state.testListSlicer.testList);
  console.log("test List :",testList)
  checkisLogin(history);

  useEffect(() => {
    dispatch(actions.tests({data}));
  }, []);

  return (
    <div className="testToBeGiven">
      <h1 className="test-list-heading">Given test list</h1>

      {testList.map(({test,route}, ind) => {
        return (
          <div
            className="js-test"
            key={ind}
            onClick={() => {
              history.push(route);
            }}
          >
            {test}
          </div>
        );
      })}
    </div>
  );
}

export default TestList;
