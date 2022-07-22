import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { render, screen } from "@testing-library/react";
import SearchInput from "../SearchInput";
import EmojiResults from "../EmojiResults";
import filterEmoji from "../filterEmoji";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "web-vitals";
import Header from "../Header";

describe(`checkingSite`, () => {
  let input;
  beforeEach(() => {});

  test("Header check", () => {
    render(<Header />);
    const headerText = screen.getByText(/Emoji Search/i);
    expect(headerText).toBeInTheDocument();
  });

  test("Emoji list must be rendered successfully", () => {
    render(<App />);
    const items = screen.getAllByTestId("row");
    expect(items.length).toEqual(20);
  });

  test("Emoji list must be rendered while filtering", () => {
    render(<App />);
    const inputText = screen.getByText("100");
    expect(inputText).toBeInTheDocument("100");
  });

  test("it click on emoji  must be copied", () => {
    render(<App />);
    const clicks = screen.getAllByTestId("row");
    expect(clicks[0]).toHaveAttribute("data-clipboard-text");
  });
});
