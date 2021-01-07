import React, { useState } from "react";
import "./testList.css";
import data from "./subject.json";
import { useHistory } from "react-router-dom";


function TestList() {
  const [key, setKey] = useState("");
  const history = useHistory();

  const checkkey = ()=>{
    key== data[0].key ? history.push('/testscript') : alert('wrong key')
  }

  return (
    <div className="testToBeGiven">
      <h1 className="test-list-heading">Given test list</h1>
      <div
        className="js-test"
        onClick={() => {
          document.getElementById("text").style.display = "block";
        }}
      >
        {data[0].Subject}
      </div>
      <input
        type="text"
        id="text"
        className="text-test"
        placeholder="Please Enter test key"
        onChange ={(e)=>{
          setKey(e.target.value)
        }}
        onBlur ={
          ()=>{
            checkkey()
          }
        }
      />
    </div>
  );
}

export default TestList;
