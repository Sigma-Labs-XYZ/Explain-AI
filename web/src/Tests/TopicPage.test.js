import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import TopicPage from "../components/TopicPage";
import fetchData from "../utils/networking";

jest.mock("../utils/networking", () => ({ fetchData: jest.fn() }));

const response = {
  topic: [
    {
      name: "Javascript",
      image: null,
      created_at: "2023-02-27",
      descriptions: [
        {
          short:
            "JavaScript is a special language that helps make websites more fun and exciting. It helps your computer do things like move things around on the screen, make things happen when you click on them, and make things look different.",
          audience: 5,
        },
        {
          short:
            "JavaScript is a type of computer code that helps webpages do cool things. For example, when you play a game on a website, that game is powered by JavaScript. It can also make webpages look nicer by adding colors and animations. JavaScript is like a secret language that computers understand, and it helps make the internet a fun and exciting place.",
          audience: 10,
        },
        {
          short:
            "JavaScript is a computer programming language that is used to create interactive websites and applications. It allows web developers to create websites and applications that respond to user actions, such as moving a mouse over a button, typing something in a textbox, or clicking a link. It is used to add behavior, store and retrieve information, and change the style and layout of web pages.",
          audience: 20,
        },
      ],
      relationships: [
        {
          audience: 10,
          to: { name: "RELATIONSHIP-TEST", image: null },
          description: "relationship test description",
        },
      ],
    },
  ],
};

describe("Test for API render on success", () => {
  test("Check that the relationship cards render after api call", async () => {
    fetchData.mockResolvedValue(response);

    render(
      <MemoryRouter initialEntries={["/javascript"]}>
        <TopicPage />
      </MemoryRouter>,
    );
    await waitFor(() => {
      expect(screen.getByRole("heading", { name: "RELATIONSHIP-TEST" })).toBeInTheDocument();
    });

    render(<TopicPage />);
    expect(fetch).toHaveBeenCalledTimes(1);

    // created for testing unsuccessfull requests in the future
    test("a p tag is not created with json file upon an unsuccessful fetch", async () => {
      fetch.mockResponseOnce(JSON.stringify());
      render(<TopicPage />);
      expect(fetch).toHaveBeenCalledTimes(1);
      await waitFor(() => {
        expect(screen.queryByTestId("jsondat")).not.toBeInTheDocument();
      });
    });
  });

  test("Clicking on a relation card should take you to the correct topic", async () => {
    fetchData.mockResolvedValue(response);
    render(<TopicPage />, { wrapper: BrowserRouter });
    let linkDiv;
    await waitFor(() => {
      linkDiv = screen.getByTestId("link-div");
    });

    fireEvent.click(linkDiv);

    await waitFor(() => {
      expect(global.window.location.pathname).toBe("/relationship-test");
    });
  });
});
