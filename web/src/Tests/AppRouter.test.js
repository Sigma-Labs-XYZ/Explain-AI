import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

//Testing Home page route -> Renders HomePage.js component

//Testing Topic Page route -> Renders TopicPage.js component
test("navigating from Home page to Topic Page", async () => {
  render(<App />, { wrapper: BrowserRouter });
  fireEvent.click(screen.getByText("Javascript"));
  expect(screen.getByText("Topic")).toBeInTheDocument();
});

//Test path parameter for topic is correct
