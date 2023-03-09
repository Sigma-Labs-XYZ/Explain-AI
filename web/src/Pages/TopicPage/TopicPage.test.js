import { fireEvent, render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import TopicPage from "./TopicPage";
import { fetchData } from "../../utils/networking";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import AudienceContext from "../../components/AudienceContext";
import fetchMock from "jest-fetch-mock";
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
    console.log(global.window.location.pathname);
    await waitFor(() => {
      expect(
        screen.getByText("Javascript and React help you make websites look special."),
      ).toBeInTheDocument();

      expect(fetch).toHaveBeenCalledTimes(1);
    });
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
    await waitFor(() => {
      screen.getAllByTestId("link-div-rtl");
      screen.getByTestId("mobile-grandParent");
      screen.getByTestId("mobile-parent");
      screen.getByTestId("description-container");
    });
  });
});
