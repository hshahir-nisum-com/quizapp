import React, { Component } from "react";

class checkValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: "",
    };
    this.check = this.check.bind(this);
  }

  check() {
    console.log("clicked");
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="user name"
          name="userName"
          onChange={(e) => {
            this.setState({
              name: e.target.value,
            });
          }}
        />
        <input
          type="password"
          name="password"
          id="name"
          placeholder="password"
          onChange={(e) => {
            this.setState({
              pass: e.target.value,
            });
          }}
        />
        <input
          type="submit"
          value="LOGIN"
          className="btn"
          data-testid="btn"
          onClick={this.check}
        />
        <p className="msg">
          Not Registered? <a href="#">Register</a>
        </p>
      </div>
    );
  }
}

export default checkValue;
