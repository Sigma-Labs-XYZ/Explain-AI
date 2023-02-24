import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import Header from "../components/Header";
import App from "../App";

//see if header component renders on first load
test("Header component renders correctly", () => {
  const headerTree = renderer.create(<Header />).toJSON();
  expect(headerTree).toMatchSnapshot();
});

//Test if header changes to displaying Toggle or Dropdown depending on the screensize

test("Header displays Age Toggle if screen size above 400px", () => {
  render(<Header />);
  const button = screen.getAllByRole("button");
  window.resizeTo(300, 300);
  expect(button[0]).not.toBeVisible();
});

//testing screen widths

//test localstorage
describe("localStorage tests", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });
  const key = "age";

  test("when age button is clicked it should update localStorage with the correct value", () => {
    render(<Header />);
    const value = "Adult";
    const button = screen.getByRole("button", {
      name: value,
    });
    fireEvent.click(button);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(key, "Adult");
    expect(localStorage.__STORE__[key]).toBe(value);
  });

  test("when dropdown is changed it should update localStorage with the correct value", () => {
    render(<Header />);
    const value = "10";
    const select = screen.getByRole("combobox");
    const option = screen.getByRole("option", { name: value });
    userEvent.selectOptions(select, option);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(key, value);
    expect(localStorage.__STORE__[key]).toBe(value);
  });
});

describe("test if all elements of header are rendered", () => {
  const tags = ["5", "10", "Adult"];
  let tagidx = 0;
  test("logo rendered", () => {
    render(<Header />);
    const logo = screen.getByAltText("logo");
    expect(logo.src).toContain("explainai-logo.png");
  });

  test("'Like I'm' <p> appears", () => {
    render(<Header />);
    expect(screen.getByText("Like I'm")).toBeInTheDocument();
  });

  test("buttons rendered", () => {
    render(<Header />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
    //expect each button to have correct text content
    buttons.map((button) => {
      expect(button).toHaveTextContent(tags[tagidx]);
      tagidx += 1;
    });
  });

  test("dropdown rendered", () => {
    render(<Header />);
    const select = screen.getByRole("combobox");
    console.log(select);
  });
});
