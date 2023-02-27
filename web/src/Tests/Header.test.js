import { render, screen, cleanup, getByText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../components/Header/Header";

describe("Testing Nav Bar", () => {
  test("testing components appear on screen", () => {
    render(<Header />);
    const logo = screen.getByAltText("Explain AI");
    const optionLabel = screen.getByText("Like I'm");
    const labels = ["five", "ten", "adult"];
    const options = labels.map((label) => {
      return screen.getByTestId(label);
    });
    options.forEach((option) => {
      expect(option).toBeInTheDocument();
    });
    expect(logo).toBeInTheDocument();
    expect(optionLabel).toBeInTheDocument();
    expect(options[0]).toHaveClass("selected");
    expect(options[1]).toHaveClass("unselected");
    expect(options[2]).toHaveClass("unselected");
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
