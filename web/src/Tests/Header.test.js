import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
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
//test the buttons

//test the dropdown

//testing screen widths

//test localstorage
// const setLocalStorageMock = (key, value) =>{
//     window.localStorage.setItem(key, value)
// }
describe("localStorage tests", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  const key = "age";
  test("should save value to localStorage", () => {
    const value = "10";
    window.localStorage.setItem(key, value);
    expect(localStorage.getItem(key)).toEqual(value);
  });
  test("when age button is clicked it should update localStorage with the correct value", () => {
    render(<Header />);
    const value = "Adult";
    const button = screen.getByRole("button", {
      name: value,
    });
    console.log(button);
    fireEvent.click(button);
    expect(localStorage.getItem(key)).toEqual(value);
  });
  test("data in local storage overwritten when age is changed", () => {
    const newValue = "5";
    window.localStorage.setItem(key, newValue);
    expect(localStorage.getItem(key)).toEqual(newValue);
  });
});

//Check if the logo loads correctly

//Check if the 'Like I'm' <p> appears'
