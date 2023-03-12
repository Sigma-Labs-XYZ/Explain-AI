/* eslint-disable no-console */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

test("Home Page must be the first Page to be rendered", async () => {
  process.env.REACT_APP_MEASUREMENT_ID = "MEASUREMENT-ID";
  render(<App />, { wrapper: BrowserRouter });
  expect(screen.getByText("Homepage")).toBeInTheDocument();
});

test("navigating from Home page to Topic Page", async () => {
  render(<App />, { wrapper: BrowserRouter });
  const topic = "javascript";
  const links = screen.getAllByRole("link");
  const topicLink = links.filter((link) => link.textContent === "javascript")[0];
  const topicName = topicLink.textContent;
  fireEvent.click(topicLink);
  expect(screen.getByText(topicName)).toBeInTheDocument();
  expect(screen.getByText(topic)).toBeInTheDocument();
});
