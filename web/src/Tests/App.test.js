import { render, screen, cleanup, getByText } from "@testing-library/react";
import App from "../App";
import { waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

test("a p tag is created with json file upon a successful fetch", async () => {
  fetch.mockResponseOnce(JSON.stringify({ test: "test" }));

  render(<App />);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith("http://localhost:4000/topics");
  await waitFor(() => {
    expect(screen.getByText('{"test":"test"}')).toBeInTheDocument();
  });
});
