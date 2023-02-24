import { render, screen, cleanup, getByText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../components/Header";

describe("Testing Nav Bar", () => {
  test("testing components appear on screen", () => {
    render(<Header />);
    const logo = screen.getByAltText("Explain AI");
    const optionLabel = screen.getByText("Like I'm");
    const optionFive = screen.getByTestId("five");
    const optionTen = screen.getByTestId("ten");
    const optionAdult = screen.getByTestId("adult");

    expect(logo).toBeInTheDocument();
    expect(optionLabel).toBeInTheDocument();
    expect(optionFive).toBeInTheDocument();
    expect(optionTen).toBeInTheDocument();
    expect(optionAdult).toBeInTheDocument();
    expect(optionFive).toHaveClass("selected");
    expect(optionTen).toHaveClass("unselected");
    expect(optionAdult).toHaveClass("unselected");
  });

  test("testing localStorage Persistance ", () => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
    render(<Header />);
    expect(window.localStorage.getItem).toBeCalledTimes(1);

    const optionTen = screen.getByTestId("ten");

    userEvent.click(optionTen);

    expect(window.localStorage.setItem).toBeCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      "selectedExplanation",
      "10"
    );
  });
});
