import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../Redux/store/store";
import TestList from "./testList";
import utilityClass from "./utils";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

afterEach(cleanup);

const tree = renderer
  .create(
    <Provider store={store}>
      {" "}
      <MemoryRouter>
        <TestList></TestList>
      </MemoryRouter>{" "}
    </Provider>
  )
  .toJSON();

it("renders correctly", () => {
  expect(tree).toMatchInlineSnapshot(`
    Array [
      " ",
      <div
        className="testToBeGiven"
      >
        <h1
          className="test-list-heading"
        >
          Given test list
        </h1>
        <div
          className="js-test"
          onClick={[Function]}
        />
        <input
          className="text-test"
          data-testid="text-box"
          id="text"
          onBlur={[Function]}
          onChange={[Function]}
          placeholder="Please Enter test key"
          type="text"
        />
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
    <TestList />
  </Provider>
);
const text = getByTestId("text-box");

test("mock default function when text-box is leave", () => {
    const mockFn = jest.fn().mockReturnValue(console.log("temp Func Called!"))
    utilityClass.utility = mockFn
    fireEvent.mouseOut(text)
    expect(mockFn).toHaveBeenCalledTimes(1)
});
