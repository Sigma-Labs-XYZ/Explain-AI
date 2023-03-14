/* eslint-disable no-console */
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import fetchMock from "jest-fetch-mock";
import testData from "../Pages/HomePage/HomePageDummyData.json";
import App from "../App";

fetchMock.enableMocks();
beforeEach(() => {
  fetch.resetMocks();
});

test("Home Page must be the first Page to be rendered", async () => {
  fetch.mockResponseOnce(JSON.stringify(testData));
  process.env.REACT_APP_MEASUREMENT_ID = "MEASUREMENT-ID";
  fetch.mockResponseOnce(JSON.stringify);
  render(<App />, { wrapper: BrowserRouter });
  expect(global.window.location.pathname).toBe("/");
  await waitFor(() => {
    expect(screen.getAllByRole("link").length).toBeGreaterThan(20); // eslint-disable-next-line
    expect(screen.getAllByRole("link").length).toBe(screen.getAllByRole("img").length);
  }, 1000);
});
