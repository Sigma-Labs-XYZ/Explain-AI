import { render, screen, cleanup, getByText } from "@testing-library/react";
import App from "../../App.js";
import { waitFor } from "@testing-library/react";

test("check to make sure api response is accurate by checking correct keys", async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.getByTestId("jsondat")).toHaveTextContent(
      'topic":[{"name":"Javascript","relationships":['
    );
  });
});
