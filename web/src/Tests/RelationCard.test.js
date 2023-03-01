import { render, screen } from "@testing-library/react";
import React from "react";
import RelationCard from "../components/RelationCard";
import { BrowserRouter } from "react-router-dom";

describe("Test if all elements of RelationCard are rendered", () => {
  const name = "HTML";
  const description = "JavaScript is used to add interactivity to HTML pages";

  test("Name of the topic rendered", () => {
    render(<RelationCard name={name} description={description} />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  test("Description of the topic rendered", () => {
    render(<RelationCard name={name} description={description} />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  test("Image of the topic rendered", () => {
    render(<RelationCard name={name} description={description} />, {
      wrapper: BrowserRouter,
    });
    const topicImg = screen.getByRole("img");
    expect(topicImg).toHaveAttribute("src", "pedro.png");
    expect(topicImg).toHaveAttribute("alt", "pedro");
  });
});
