import { render, screen } from "@testing-library/react";
import * as React from "react";
import Header from "../utils/Components/Header";

const setLocalStorage = (age, input) => {
  window.localStorage.setItem(age, JSON.stringify(input));
};

describe("Testing Header component", () => {
  test("testing components appear on screen", () => {
    render(<Header />);
    const logo = screen.getByAltText("ExplaiAI logo");
    const textLabel = screen.getByText("Like I'm");
    const buttonFive = screen.getByTestId("five");
    const buttonTen = screen.getByTestId("ten");
    const buttonAdult = screen.getByTestId("adult");

    expect(logo).toBeInTheDocument();
    expect(textLabel).toBeInTheDocument();
    expect(buttonFive).toBeInTheDocument();
    expect(buttonTen).toBeInTheDocument();
    expect(buttonAdult).toBeInTheDocument();
  });

  test("correct classes has been assigned", () => {
    render(<Header />);
    const buttonFive = screen.getByTestId("five");
    const buttonTen = screen.getByTestId("ten");
    const buttonAdult = screen.getByTestId("adult");

    expect(buttonFive).toHaveClass("header__content__ages__selected");
    expect(buttonTen).toHaveClass("header__content__ages__unselected");
    expect(buttonAdult).toHaveClass("header__content__ages__unselected");
  });
});

describe("Testing local storage functionality", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("Data is added to local storage", () => {
    render(<Header />);
    const mockAge = "1"; //id
    const mockInput = { age: "five" };

    setLocalStorage(mockAge, mockInput);
    expect(localStorage.getItem(mockAge)).toEqual(JSON.stringify(mockInput));
  });

  test("Data in local storage is overwritten", () => {
    const mockAge = "3"; //id
    const mockOldInput = { age: "five" };
    const mockNewInput = { age: "adult" };

    window.localStorage.setItem(mockAge, JSON.stringify(mockOldInput));
    expect(localStorage.getItem(mockAge)).toEqual(JSON.stringify(mockOldInput));

    setLocalStorage(mockAge, mockNewInput);
    window.localStorage.setItem(mockAge, JSON.stringify(mockNewInput));
    //expect
  });
});

describe("Testing window size adjustment", () => {
  test("Buttons disappear when window changes", () => {
    render(<Header />);

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 200,
    });
    screen.getByRole("");
    const button = screen.getAllByRole("button");
    expect(button[0]).not.toBeVisible();
  });
});
