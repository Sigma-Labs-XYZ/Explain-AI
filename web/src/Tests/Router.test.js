import { render, screen } from "@testing-library/react";
import AppRouter from "../AppRouter";
import { waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  fetchMock.enableMocks();
  fetch.resetMocks();
});

describe("Testing Routes from Homepage to Topic", () => {
  test("user is navigated to Topic page from login", async () => {
    fetch.mockResponseOnce(JSON.stringify({ test: "test" }));
    render(<AppRouter />);

    expect(global.window.location.pathname).toBe("/");

    const topicLink = screen.getByText("Topic Page");
    userEvent.click(topicLink);

    await waitFor(() => {
      expect(global.window.location.pathname).toBe("/javascript");
    });
  });
});
