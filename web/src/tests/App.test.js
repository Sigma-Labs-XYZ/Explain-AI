import { render, screen, waitFor } from "@testing-library/react";
import { fetchTopics } from "../Networking";
import App from "../App";
import React from "react";

jest.mock("../Networking", () => ({ fetchTopics: jest.fn() }));

test("display fetched topics as a string", async () => {
  const mockedResult = { topic: "Javascript" };
  fetchTopics.mockResolvedValue(mockedResult);
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText(JSON.stringify(mockedResult))).toBeInTheDocument();
  });
});
