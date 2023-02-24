import { render, screen } from "@testing-library/react";
import App from "../App";
import { waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";

beforeEach(() => {
  fetchMock.enableMocks();
  fetch.resetMocks();
});

describe("Test for API render on sucess", () => {
  test("a p tag is created with json file upon a successful fetch", async () => {
    fetch.mockResponseOnce(JSON.stringify({ test: "test" }));

    render(<App />);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("http://localhost:4000/topics");
    await waitFor(() => {
      expect(screen.getByText('{"test":"test"}')).toBeInTheDocument();
    });
  });

  //created for testing unsuccessfull requests in the future
  test("a p tag is not created with json file upon an unsuccessful fetch", async () => {
    fetch.mockResponseOnce(JSON.stringify());

    render(<App />);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("http://localhost:4000/topics");
    await waitFor(() => {
      expect(screen.queryByTestId("jsondat")).not.toBeInTheDocument();
    });
  });
});
