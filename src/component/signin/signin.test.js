import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../Redux/store/store";
import Signin from "./signin";
import check from "./utils";
import { cleanup, fireEvent, render } from "@testing-library/react";

afterEach(cleanup);
const tree = renderer
  .create(
    <Provider store={store}>
      {" "}
      <Signin></Signin>{" "}
    </Provider>
  )
  .toJSON();
it("renders correctly", () => {
  expect(tree).toMatchInlineSnapshot(`
    Array [
      " ",
      <div
        className="form registered "
      >
        <input
          name="userName"
          onChange={[Function]}
          placeholder="user name"
          type="text"
        />
        <input
          id="name"
          name="password"
          onChange={[Function]}
          placeholder="password"
          type="password"
        />
        <input
          className="btn"
          data-testid="btn"
          onClick={[Function]}
          type="submit"
          value="LOGIN"
        />
        <p
          className="msg"
        >
          Not Registered? 
          <a
            href="/#"
          >
            Register
          </a>
        </p>
      </div>,
      " ",
    ]
  `);
});

it("renders snapshot", () => {
  expect(tree).toMatchSnapshot();
});

const { getByTestId } = render(
  <Provider store={store}>
    <Signin />
  </Provider>
);
const Button = getByTestId("btn");

test("click event test", () => {
  function clickedEvent() {
    console.log("event is clicked");
  }
  fireEvent.click(Button, clickedEvent());
});

test("Button Enable Test", () => {
  expect(Button).toBeEnabled();
});

test("calls onClick prop when clicked", () => {
  const handleClick = jest.fn();
  Button.onclick = handleClick;
  fireEvent.click(Button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("mock default function when button is clicked", () => {
  const mockFunc = jest.fn();
  check.prototype = mockFunc;
  mockFunc.mockReturnValue(console.log("this response from mock"));
  fireEvent.click(Button);
});
