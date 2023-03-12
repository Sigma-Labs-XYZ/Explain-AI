import React from "react";
import { userEvent, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

test("Clicking on a breadcrumb navigates you to that route", async () => {
  render(
    <Breadcrumbs
      parent={{ name: "computing", slug: "computing" }}
      grandParent={{ name: "maths", slug: "maths" }}
    />,
    { wrapper: BrowserRouter },
  );

  const breadCrumbLinkComputing = screen.getAllByText("computing"); // find the first link
  const breadCrumbLinkMaths = screen.getAllByText("maths");
  const allLinks = breadCrumbLinkComputing.concat(breadCrumbLinkMaths);
  expect(global.window.location.pathname).toBe("/");
  allLinks.forEach((item) => {
    const breadCrumbText = item.textContent;
    fireEvent.click(item);
    expect(global.window.location.pathname).toBe(`/${breadCrumbText}`);
  });
});
