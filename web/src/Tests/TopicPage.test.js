import { render, screen, cleanup, getByText } from "@testing-library/react";
import TopicPage from "../pages/TopicPage";
import { waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";

beforeEach(() => {
  fetchMock.enableMocks();
  fetch.resetMocks();
});

describe("Test for API render on sucees", () => {
  test("a p tag is created with json file upon a successful fetch", async () => {
    fetch.mockResponseOnce(JSON.stringify({ test: "test" }));

    render(<TopicPage />);
    await waitFor(() => {
      expect(screen.getByText('{"test":"test"}')).toBeInTheDocument();
    });
  });

  //created for testing unsuccessfull requests in the future
  test("a p tag is not created with json file upon an unsuccessful fetch", async () => {
    fetch.mockResponseOnce(JSON.stringify());

    render(<TopicPage />);
    await waitFor(() => {
      expect(screen.queryByTestId("jsondat")).not.toBeInTheDocument();
    });
  });
});
