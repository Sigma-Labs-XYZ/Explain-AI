import React from "react";
import { render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import testData from "../HomePageDummyData.json";
import AudienceContext from "../../../components/AudienceContext";

fetchMock.enableMocks();
beforeEach(() => {
  fetch.resetMocks();
});

describe("Test HpmePageCards are rendered on the HomePage", () => {
  // eslint-disable-next-line
  test("test 2 groups are rendered into main", async () => {
    fetch.mockResponseOnce(JSON.stringify(testData));
    render(
      <AudienceContext>
        <BrowserRouter>
          {" "}
          <HomePage />
        </BrowserRouter>
      </AudienceContext>,
    );
    const group1 = await screen.findByText("Science");
    const group1Description = await screen.findByText(
      "Subjects related to the natural world and scientific inquiry",
    );
    const group2 = await screen.findByText("Social Studies");
    const group2Description = await screen.findByText(
      "Subjects related to the study of human society and relationships between individuals, groups, and institutions",
    );

    expect(group1).toBeInTheDocument();
    expect(group1Description).toBeInTheDocument();
    expect(group2).toBeInTheDocument();
    expect(group2Description).toBeInTheDocument();
  });
});
