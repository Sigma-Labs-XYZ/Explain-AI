import { render, screen, cleanup, getByText } from "@testing-library/react";
import App from "../../App.js";
import { waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

test("check to make sure api response is accurate by checking correct keys", async () => {
  render(<App/>);
  const topicsLink = screen.getByText('Topics')
  userEvent.click(topicsLink)
  expect(screen.getByText('Topics')).toBeInTheDocument()
});
