import { render, screen, cleanup, getByText } from "@testing-library/react";
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

  test("testing localStorage Persistance ", () => {});

  test("testing responsive design", () => {});
});
