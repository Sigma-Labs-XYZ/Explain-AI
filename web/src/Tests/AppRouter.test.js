import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

//Testing Home page route -> Renders HomePage.js component
test("Home Page must be the first Page to be rendered", async () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(screen.getByText("Homepage")).toBeInTheDocument();
});

//Testing Topic Page route -> Renders TopicPage.js component
test("navigating from Home page to Topic Page", async () => {
  render(<App />, { wrapper: BrowserRouter });
  const topic = "javascript";
  fireEvent.click(screen.getByText(topic));
  expect(screen.getByText(topic)).toBeInTheDocument();
});

//Test path parameter for topic is correct
test("Path parameter for topic is correct", async () => {
  const pathParameter = "test";
  const route = `/${pathParameter}`;
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(`Test: ${pathParameter}`)).toBeInTheDocument();
});
