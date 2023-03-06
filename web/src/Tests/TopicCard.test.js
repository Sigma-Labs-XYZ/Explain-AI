import React from "react";
import { render, screen } from "@testing-library/react";
import TopicCard from "../components/TopicCard";
import testData from "./dummy_data.json";
import { AudienceContext } from "../components/AudienceContext";

const topic = testData.topic[0];
describe("Tests for TopicCard using RTL", () => {
  beforeEach(() => {
    // topic = { ...testData.topic[0] }; // reset topic
  });
  test("Renders everything in the right roles", () => {
    render(
      <AudienceContext>
        <TopicCard topic={topic} />,
      </AudienceContext>,
    );
    const title = screen.getByRole("heading");
    screen.getByText(topic.descriptions[0].short);
    const image = screen.getByRole("img");
    const button = screen.getByRole("button");
    expect(title.textContent).toBe(topic.name);
    expect(button.textContent).toMatch(/Tell me more/i);
    expect(image.src).toBe(topic.image);
  });
  test("Renders dummy image if dummy data has no image", () => {
    // topic.image = false;
    render(
      <AudienceContext>
        <TopicCard topic={{ ...topic, image: false }} />
      </AudienceContext>,
    );
    const image = screen.getByRole("img");
    expect(image.src).toBe("http://localhost/no-image.jpeg");
  });
  // test("JSON is not the correct structure, so an error box appears", () => {
  //   // topic.descriptions = "";
  //   render(<TopicCard topic={{ ...topic, descriptions: "" }} audience={20} />);
  //   expect(screen.getByTestId("error-message")).toBeInTheDocument();
  // });
});
