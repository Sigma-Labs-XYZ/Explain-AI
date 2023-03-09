import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { within } from "@testing-library/dom"; // eslint-disable-line
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import AudienceContext from "../../components/AudienceContext";

describe("localStorage tests", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });
  const key = "age";

  test("should save to local storage", () => {
    const value = "5";
    localStorage.setItem(key, value);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(key, value);
    expect(localStorage.__STORE__[key]).toBe(value);
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });

  test("correct option should be selected when localStorage is set", () => {
    const value = "10";
    localStorage.setItem(key, value);
    render(
      <AudienceContext>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AudienceContext>,
    );
    const options = screen.getAllByRole("option");
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();
  });

  test("when age button is clicked it should update localStorage with the correct value", () => {
    render(
      <AudienceContext>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AudienceContext>,
    );
    const value = 20;
    const button = screen.getByRole("button", {
      name: "Adult",
    });
    fireEvent.click(button);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(key, value);
    expect(localStorage.__STORE__[key]).toBe(String(value));
  });

  test("when dropdown is changed it should update localStorage with the correct value", () => {
    render(
      <AudienceContext>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AudienceContext>,
    );
    const value = 10;
    const select = screen.getByRole("combobox");
    const option = screen.getByRole("option", { name: value });
    userEvent.selectOptions(select, option);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(key, value);
    expect(localStorage.__STORE__[key]).toBe(String(value));
  });
});

describe("test if all elements of header are rendered", () => {
  const tags = ["5", "10", "Adult"];
  test("logo rendered", () => {
    render(
      <AudienceContext>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AudienceContext>,
    );
    const logo = screen.getByAltText("Explain AI");
    expect(logo.src).toContain("explainai-logo.png");
  });

  test("'Like I'm' <p> appears", () => {
    render(
      <AudienceContext>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AudienceContext>,
    );
    expect(screen.getByText("Like I'm")).toBeInTheDocument();
  });

  test("buttons rendered", () => {
    render(
      <AudienceContext>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AudienceContext>,
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
    tags.map((tag) => expect(screen.getByRole("button", { name: tag })).toBeInTheDocument());
  });

  test("dropdown rendered", () => {
    render(
      <AudienceContext>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AudienceContext>,
    );
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    tags.map((tag) => expect(screen.getByRole("option", { name: tag })).toBeInTheDocument());
  });
});

describe("test logo loads homepage when clicked", () => {
  test("The logo is within an a tag", () => {
    render(
      <AudienceContext>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AudienceContext>,
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
    const img = within(link).getByRole("img");
    expect(img.src).toBe("http://localhost/explainai-logo.png");
  });
});
