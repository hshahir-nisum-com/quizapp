import {
  cleanup,
  fireEvent,
  render,
  screen,
  createEvent,
} from "@testing-library/react";

import CheckValue from "./checkValue";

afterEach(cleanup);


const { getByTestId } = render(<CheckValue />);
const Button = getByTestId("btn");
test("click event test", () => {
    let obj1 = new CheckValue()
    let check = obj1.check = jest.fn();
    fireEvent.click(Button)
    expect(check).toBeCalled()
});


