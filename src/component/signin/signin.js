import React, { useState, useEffect } from "react";
import "./signin.css";
import data from "./credential.json";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Redux/slicers/loginSlicer";
import check from "./utils";

function Signin() {
  const [name, setName] = useState("");
  const [pass, setpass] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  let userName = useSelector((state) => state.signinReducer.userName);
  let userPassword = useSelector((state) => state.signinReducer.userPassword);

  useEffect(() => {
    data.map(({ name, password }) => {
      dispatch(actions.uName(name.toLocaleLowerCase()));
      dispatch(actions.uPassword(password.toLocaleLowerCase()));
      return 0;
    });
  }, [dispatch]);

  return (
    <div className="form registered ">
      <input
        type="text"
        placeholder="user name"
        name="userName"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="password"
        name="password"
        id="name"
        placeholder="password"
        onChange={(e) => {
          setpass(e.target.value);
        }}
      />
      <input
        type="submit"
        value="LOGIN"
        className="btn"
        data-testid="btn"
        onClick={() => {
          check(name, pass, history, userName, userPassword);
        }}
      />
      <p className="msg">
        Not Registered? <a href="/#">Register</a>
      </p>
    </div>
  );
}

export default Signin;
