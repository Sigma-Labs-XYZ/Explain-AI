import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RelationCard from "../components/RelationCard";
import pedro from "../images/pedro.png";

describe("Test if all elements of RelationCard are rendered", () => {
  const name = "HTML";
  const description = "JavaScript is used to add interactivity to HTML pages";
  const image = pedro;

  test("Name of the topic rendered", () => {
    render(<RelationCard name={name} description={description} image={image} />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  test("Description of the topic rendered", () => {
    render(<RelationCard name={name} description={description} image={image} />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  test("Image of the topic rendered", () => {
    render(<RelationCard name={name} description={description} image={image} />, {
      wrapper: BrowserRouter,
    });
    const topicImg = screen.getByRole("img");
    expect(topicImg).toHaveAttribute("src", "pedro.png");
    expect(topicImg).toHaveAttribute("alt", "HTML");
  });
});
