import { render, screen, waitFor, rerender } from "@testing-library/react";
import { fetchTopics } from "../Networking";
import App from "../App";
import React from "react";

jest.mock("../Networking", () => ({ fetchTopics: jest.fn() }));

test("fetch topics", async () => {
  fetchTopics.mockResolvedValue({ topic: "Javascript" });
  render(<App />);
  await waitFor(() => {
    screen.getByText('{"topic":"Javascript"}');
  });
});
