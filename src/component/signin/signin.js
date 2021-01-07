import React, { useState } from "react";
import "./signin.css";
import data from "./credential.json";
import { useHistory } from "react-router-dom";

function Signin() {
  const [name, setName] = useState("");
  const [pass, setpass] = useState("");
  const history = useHistory();

  const check = (nameInput, passwordInput) => {
    let user = data.find(({ name }) =>
      name.toLowerCase() === nameInput.toLowerCase() ? true : false
    );
    let pass = data.find(({ password }) =>
      password.toLowerCase() === passwordInput.toLowerCase() ? true : false
    );

    user && pass
      ? localStorage.setItem("isUserLoging", true)
      : localStorage.setItem("isUserLoging", false);

    console.log(localStorage.getItem("isUserLoging"));
    if (localStorage.getItem("isUserLoging")=='true') {
      console.log("in if cond")
      history.push("/testlist");
    } else {
      console.log("in else cond")
      // alert("please login first");
    }
  };
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
        onClick={() => {
          check(name, pass);
        }}
      />
      <p className="msg">
        Not Registered? <a href="#">Register</a>
      </p>
    </div>
  );
}

export default Signin;
