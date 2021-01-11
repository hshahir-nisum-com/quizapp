import React from "react";
import renderer from "react-test-renderer";
import Signin from "./signin";
import { check, apiCall,productCat} from "./utils";


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

// it("test resolve of promise", () => {
//   return apiCall()
//     .then((res) => res.json())
//     .then((json) =>{ expect(json)})
//     .catch(err => console.log("error "));
// });



// __tests__/user-test.js
jest.mock(apiCall);


// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(1);
  return productCat(4).then(data => expect(data).toEqual('men'));
});


