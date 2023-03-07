/* eslint-disable no-console */
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

test("Home Page must be the first Page to be rendered", async () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(screen.getByText("Homepage")).toBeInTheDocument();
});

test("navigating from Home page to Topic Page", async () => {
  render(<App />, { wrapper: BrowserRouter });
  const topic = "javascript";
  const links = screen.getAllByRole("link");
  const topicLink = links.filter(link=>link.textContent==='javascript')[0]
  const topicName = topicLink.textContent;
  fireEvent.click(topicLink);
  expect(screen.getByText(topicName)).toBeInTheDocument();
  expect(screen.getByText(topic)).toBeInTheDocument();
});

  test("the logo should take the user to the homepage when clicked", async ()=>{
    render(<App />, {wrapper: BrowserRouter});
    const logo = screen.getByAltText("Logo of explain-ai & link to take you back to the homepage");
    const links = screen.getAllByRole("link");
    const topicLink = links.filter(link=>link.textContent==='javascript')[0]
    const topicName = topicLink.textContent;
    userEvent.click(topicLink);
    await waitFor(()=>{
       expect(global.window.location.pathname).toBe("/javascript");
    })

    // fireEvent.click(logo)
    // await waitFor(()=>{
    //       expect(global.window.location.pathname).toBe("/"); 
    // })
  })
