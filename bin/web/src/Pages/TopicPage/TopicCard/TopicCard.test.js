import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TopicCard from "./TopicCard";
import testData from "./dummy_data.json";
import AudienceContext from "../../../components/AudienceContext";

const topic = testData.topic[0];
describe("Tests for TopicCard using RTL", () => {
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
  test("Renders dummy image if dummy data has no image", async () => {
    // topic.image = false;
    render(
      <AudienceContext>
        <TopicCard topic={{ ...topic, image: "noadsdaz" }} />
      </AudienceContext>,
    );
    const image = screen.getByRole("img");
    fireEvent.error(image);
    expect(image.src).toBe("http://localhost/no-image.jpeg");
  });
});

describe("test the show me more button loads more text", () => {
  test("the button changes changes text based on what's shown", () => {
    render(
      <AudienceContext>
        <TopicCard topic={topic} />
      </AudienceContext>,
    );

    const tellMeMoreButton = screen.getByRole("button");
    expect(tellMeMoreButton.textContent).toBe("Tell me more");
    fireEvent.click(tellMeMoreButton);
    expect(tellMeMoreButton.textContent).toBe("Tell me less");
  });

  test("the longer description is shown when the button is pressed", () => {
    render(
      <AudienceContext>
        <TopicCard topic={topic} />
      </AudienceContext>,
    );
    const tellMeMoreButton = screen.getByRole("button");
    const descriptionHolder = screen.getByTestId("description-container");
    expect(descriptionHolder.textContent.trim()).toBe(topic.descriptions[0].short);
    fireEvent.click(tellMeMoreButton);
    expect(descriptionHolder.textContent.trim()).toBe(topic.descriptions[0].long);
  });
});
