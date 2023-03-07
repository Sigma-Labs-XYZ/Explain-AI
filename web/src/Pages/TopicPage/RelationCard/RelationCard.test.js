import { render, screen, within } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import  AudienceContext  from "../../../components/AudienceContext";
import RelationCard from "./RelationCard";

const name = "pedro";
const description = "JavaScript is used to add interactivity to HTML pages";
const image = `${process.env.PUBLIC_URL}pedro.png`;

describe("Test if all elements of RelationCard are rendered", () => {
  test("Name of the topic rendered", () => {
    render(
      <AudienceContext>
        <RelationCard name={name} description={description} image={image} />
      </AudienceContext>,
      {
        wrapper: BrowserRouter,
      },
    );
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  test("Description of the topic rendered", () => {
    render(
      <AudienceContext>
        <RelationCard name={name} description={description} image={image} />
      </AudienceContext>,
      {
        wrapper: BrowserRouter,
      },
    );
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  test("Image of the topic rendered", () => {
    render(
      <AudienceContext>
        <RelationCard name={name} description={description} image={image} />
      </AudienceContext>,
      {
        wrapper: BrowserRouter,
      },
    );
    const topicImg = screen.getByRole("img");
    expect(topicImg).toHaveAttribute("src", `${name}.png`);
    expect(topicImg).toHaveAttribute("alt", name);
  });
});

describe("link elements", () => {
  test("elements loaded within the link tag so they are all clickable and correct link path", () => {
    render(
      <AudienceContext>
        <RelationCard name={name} description={description} image={image} />
      </AudienceContext>,
      {
        wrapper: BrowserRouter,
      },
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/${name}`);
    const img = within(link).getByRole("img");
    expect(img).toHaveAttribute("src", `${name}.png`);
    const heading = within(link).getByRole("heading");
    expect(heading.textContent).toBe(name);
  });
});
