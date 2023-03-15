import { render, screen, within, fireEvent } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AudienceContext from "../../../components/AudienceContext";
import RelationCard from "./RelationCard";

const name = "pedro-pascal";
const slug = "Pedro Pascal";
const description = "JavaScript is used to add interactivity to HTML pages";
const image = `${process.env.PUBLIC_URL}pedro-pascal.png`;
function loading() {
  /* eslint-disable no-console */
  console.log("is loading : )");
  /* eslint-enable no-console */
}

describe("Test if all elements of RelationCard are rendered", () => {
  test("Name of the topic rendered", () => {
    render(
      <AudienceContext>
        <RelationCard
          slug={slug}
          name={name}
          description={description}
          image={image}
          loading={loading}
        />
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
        <RelationCard
          slug={slug}
          name={name}
          description={description}
          image={image}
          loading={loading}
        />
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
        <RelationCard
          slug={slug}
          name={name}
          description={description}
          image={image}
          loading={loading}
        />
      </AudienceContext>,
      {
        wrapper: BrowserRouter,
      },
    );
    const topicImg = screen.getByRole("img");
    expect(topicImg).toHaveAttribute("src", `${name}.png`);
    expect(topicImg).toHaveAttribute("alt", name);
  });
  test("Failure to find image resolves to default image", () => {
    render(
      <AudienceContext>
        <RelationCard
          slug={slug}
          name={name}
          description={description}
          image={image}
          loading={loading}
        />
      </AudienceContext>,
      {
        wrapper: BrowserRouter,
      },
    );
    const img = screen.getByRole("img");
    fireEvent.error(img);
    expect(img.src).toBe("http://localhost/no-image.jpeg");
  });
});

describe("link elements", () => {
  test("elements loaded within the link tag so they are all clickable and correct link path", async () => {
    render(
      <AudienceContext>
        <RelationCard
          slug={slug}
          name={name}
          description={description}
          image={image}
          loading={loading}
        />
      </AudienceContext>,
      {
        wrapper: BrowserRouter,
      },
    );
    expect(global.window.location.pathname).toBe("/");
    const link = screen.getByRole("link");
    fireEvent.click(link);
    expect(global.window.location.pathname).toBe(`/${slug}`);
    expect(link).toHaveAttribute("href", `/${slug}`);
    const img = within(link).getByRole("img");
    expect(img).toHaveAttribute("src", `${name}.png`);
    const heading = within(link).getByRole("heading");
    expect(heading.textContent).toBe(name);
  });
});
