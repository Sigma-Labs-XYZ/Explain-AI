import { render, screen } from "@testing-library/react";
import * as React from "react";
import Header from "../components/Header";

const setLocalStorage = (age, input) => {
  window.localStorage.setItem(age, JSON.stringify(input));
};

describe("Testing Header component", () => {
  test("testing components appear on screen", () => {
    render(<Header />);
    const logo = screen.getByAltText("ExplaiAI logo");
    const textLabel = screen.getByText("Like I'm");
    const buttonNo = ["5", "10", "20"];

    expect(logo).toBeInTheDocument();
    expect(textLabel).toBeInTheDocument();
    buttonNo.map((button) => {
      expect(screen.getByTestId(button)).toBeInTheDocument();
    });
  });

  test("correct classes has been assigned", () => {
    render(<Header />);
    const buttonNo = [
      { button: "5", class: "header__content__ages__selected" },
      { button: "10", class: "header__content__ages__unselected" },
      { button: "20", class: "header__content__ages__unselected" },
    ];

    Object.values(buttonNo).map((item) => {
      expect(screen.getByTestId(item.button)).toHaveClass(item.class);
    });
  });
});

describe("Testing local storage functionality", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("Data is added to local storage", () => {
    const mockId = "1";
    const mockInput = { age: "five" };

    setLocalStorage(mockId, mockInput);
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockInput));
  });

  test("Data in local storage is overwritten", () => {
    const mockId = "3";
    const mockOldInput = { age: "five" };
    const mockNewInput = { age: "adult" };

    window.localStorage.setItem(mockId, JSON.stringify(mockOldInput));
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockOldInput));

    setLocalStorage(mockId, mockNewInput);
    window.localStorage.setItem(mockId, JSON.stringify(mockNewInput));
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockNewInput));
  });
});
