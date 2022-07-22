import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
// import { type } from "@testing-library/user-event/dist/type";
import { click } from "@testing-library/user-event/dist/click";

import Todo from "../Todo/index";

describe("Todo testleri", () => {
  let button;
  let input;

  beforeEach(() => {
    render(<Todo />);

    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
  });

  test("3 default item gelmeli", () => {
    const items = screen.getAllByText(/Item/i);

    expect(items.length).toEqual(3);
  });

  test("input ve btn dokumanda bulunmali", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("inputa string girilip listeye eklenmeli", () => {
    const name = "Furkan";
    userEvent.type(input, name);

    click(button);

    expect(screen.getByText(name).toBeInTheDocument());
  });
});
