import { render, screen } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
import { click } from "@testing-library/user-event/dist/click";

import Counter from "./Counter";

describe("Counter tests", () => {
  let count;
  let increaseBtn;
  let decreaseBtn;

  beforeEach(() => {
    render(<Counter />);
    count = screen.getByText("0");
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease");
  });

  test("increase btn", () => {
    click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});
