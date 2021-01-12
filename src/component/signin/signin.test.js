import React from "react";
import renderer from "react-test-renderer";
import Signin from "./signin";
import { check, productCat } from "./utils";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  createEvent,
} from "@testing-library/react";

afterEach(cleanup);
/*

it("renders correctly", () => {
  const tree = renderer.create(<Signin></Signin>).toJSON();
  expect(tree).toMatchInlineSnapshot(`
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
        onClick={[Function]}
        type="submit"
        value="LOGIN"
      />
      <p
        className="msg"
      >
        Not Registered? 
        <a
          href="#"
        >
          Register
        </a>
      </p>
    </div>
  `);
});

it("renders snapshot", () => {
  const tree = renderer.create(<Signin></Signin>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("unit test of check function", () => {
  let temp = check("Ali", "123");
  expect(temp).toBeTruthy();
  temp = check("Ali", "1234");
  expect(temp).toBeUndefined();
  temp = check();
  expect(temp).toBeUndefined();
});




const cat = {
  category: "men clothing"
};

jest.mock("./api", () => {
  return  {
    apiCall: () => cat
  }
});

test("should fetch data", () => {
  return productCat().then((json) =>  expect(json).toEqual(cat));
});

*/
//  expect(data).toEqual(users)

const { getByTestId } = render(<Signin />);
const Button = getByTestId("btn");

// test("click event test", () => {
//   function clickedEvent() {
//     console.log("event is clicked");
//   }
//   fireEvent.click(Button, clickedEvent());
// });

// test("Button Enable Test", () => {
//   expect(Button).toBeEnabled();
// });

test("calls onClick prop when clicked", () => {
  const handleClick = jest.fn();
  Button.onclick = handleClick;
  fireEvent.click(Button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
