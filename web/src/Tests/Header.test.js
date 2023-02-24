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
    const buttonText = ["five", "ten", "adult"];

    expect(logo).toBeInTheDocument();
    expect(textLabel).toBeInTheDocument();
    buttonText.map((button) => {
      expect(screen.getByTestId(button)).toBeInTheDocument();
    });
  });

  test("correct classes has been assigned", () => {
    render(<Header />);
    const buttonText = [
      { button: "five", class: "header__content__ages__selected" },
      { button: "ten", class: "header__content__ages__unselected" },
      { button: "adult", class: "header__content__ages__unselected" },
    ];

    Object.values(buttonText).map((item) => {
      expect(screen.getByTestId(item.button)).toHaveClass(item.class);
    });
  });
});

describe("Testing local storage functionality", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("Data is added to local storage", () => {
    render(<Header />);
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
