import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import fetchMock from "jest-fetch-mock";
import TopicPage from "./TopicPage";
import AudienceContext from "../../components/AudienceContext";
import testData from "./TopicCard/dummy_data.json";

fetchMock.enableMocks();
beforeEach(() => {
  fetch.resetMocks();
});

describe("Test for API render on success", () => {
  test("Check that the api call is working", async () => {
    fetch.mockResponseOnce(JSON.stringify(testData));
    render(
      <MemoryRouter initialEntries={["/javascript"]}>
        <AudienceContext>
          <TopicPage />
        </AudienceContext>
      </MemoryRouter>,
    );
    await waitFor(() => {
      expect(
        screen.getByText("Javascript and React help you make websites look special."),
      ).toBeInTheDocument();
    });
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  test("Check that all elements on TopicPage are rendered", async () => {
    fetch.mockResponseOnce(JSON.stringify(testData));
    render(
      <MemoryRouter initialEntries={["/javascript"]}>
        <AudienceContext>
          <TopicPage />
        </AudienceContext>
      </MemoryRouter>,
    );

    expect(await screen.findByText("Javascript makes HTML do cool things.")).toBeInTheDocument();
    expect(await screen.findByTestId("mobile-grandParent")).toBeInTheDocument();
    expect(await screen.findByTestId("description-container")).toBeInTheDocument();
    expect(await screen.findByTestId("mobile-parent")).toBeInTheDocument();
  });
});
