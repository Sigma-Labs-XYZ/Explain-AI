import React from "react";
import { render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import { BrowserRouter } from "react-router-dom";
import HomePageCard from "./HomePageCard";
import testData from "../HomePageDummyData.json";
import AudienceContext from "../../../components/AudienceContext";

fetchMock.enableMocks();
beforeEach(() => {
  fetch.resetMocks();
});

describe("Test elements in the HomePageCard", () => {
  // eslint-disable-next-line
  test("test a name, title, description and topics are loaded", async () => {
    fetch.mockResponseOnce(JSON.stringify(testData));
    render(
      <AudienceContext>
        <BrowserRouter>
          <HomePageCard group={testData.group[0]} audience={5} />
        </BrowserRouter>
      </AudienceContext>,
    );
    const group1 = await screen.findByText("Science");
    const group1Description = await screen.findByText(
      "Subjects related to the natural world and scientific inquiry",
    );
    const getLinks = await screen.findAllByRole("link");

    expect(group1).toBeInTheDocument();
    expect(group1Description).toBeInTheDocument();
    expect(getLinks[0].textContent).toBe(
      "Physical SciencePhysical science is the study of matter, energy, and their interactions.",
    );
    expect(getLinks[1].textContent).toBe(
      "Life ScienceLife Science is the study of living things like plants, animals, and humans.",
    );
    expect(getLinks[2].textContent).toBe(
      "Earth ScienceStudy of Earth's natural systems, including geology, oceanography, meteorology, and astronomy.",
    );
    expect(getLinks[3].textContent).toBe(
      "MathsMaths is using numbers, shapes, and patterns to solve problems and understand the world around us.",
    );
  });
  test("Changing age changes the information on the homepage", () => {
    fetch.mockResponseOnce(JSON.stringify(testData));
    render(
      <AudienceContext>
        <BrowserRouter>
          <HomePageCard group={testData.group[0]} audience={10} />
        </BrowserRouter>
      </AudienceContext>,
    );
    const physScience10 = screen.getByText(
      testData.group[0].items[0].topic.descriptions[1].extra_short,
    );
    expect(physScience10).toBeInTheDocument();
  });
  test("changing age to adult gets the right description", async () => {
    fetch.mockResponseOnce(JSON.stringify(testData));
    render(
      <AudienceContext>
        <BrowserRouter>
          <HomePageCard group={testData.group[0]} audience={20} />
        </BrowserRouter>
      </AudienceContext>,
    );
    const physScienceAdult = await screen.findByText(
      testData.group[0].items[0].topic.descriptions[2].extra_short,
    );
    expect(physScienceAdult).toBeInTheDocument();
  });
});
