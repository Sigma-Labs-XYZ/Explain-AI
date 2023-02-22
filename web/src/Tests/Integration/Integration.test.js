import { render, screen, cleanup, getByText } from "@testing-library/react";
import App from "../../App.js";
import { waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

test("check to make sure api response is accurate by checking correct keys", async () => {
  
    render(<App/>)
    const topicsLink = screen.getByText('Topics') 
    await userEvent.click(topicsLink) //go to topics page
    const firstLink = screen.getAllByRole('link')[1]
    await userEvent.click(firstLink) //go to a topic page
    const topicInfo = await screen.findByTestId('jsondat') //find test-id
    expect(topicInfo).toBeInTheDocument()

});
