import { render, screen, cleanup, getByText } from "@testing-library/react";
import App from "../../App.js";
import AppRouter from "../../AppRouter.js";
import { waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import {MemoryRouter} from 'react-router-dom'

test("check to make sure api response is accurate by checking correct keys", async () => {
  
    render(<AppRouter/>,{wrapper:MemoryRouter})

    const links = screen.getAllByRole('link')

    for (let link of links) {
      render(<AppRouter/>,{wrapper:MemoryRouter})
      userEvent.click(link) //go to a topic page
      //const stuff = await screen.findByRole('navigation')
      const topicInfo = await screen.findByTestId('jsondat') //find test-id
      expect(topicInfo).toBeInTheDocument()
    }
});
