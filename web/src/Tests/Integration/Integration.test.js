import { render, screen, cleanup, getByText } from "@testing-library/react";
import App from "../../App.js";
import { waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

test("check to make sure api response is accurate by checking correct keys", async () => {
  
    render(<App/>)

    const links = screen.getAllByRole('link')
    for (let link of links) {
      console.log(link.textContent)
      await userEvent.click(link) //go to a topic page
      const topicInfo = await screen.findByTestId('jsondat') //find test-id
      expect(topicInfo).toBeInTheDocument()
      const linkBack = screen.getByRole('link')
      await userEvent.click(linkBack) //sends user back to homepage
      setTimeout(()=>{},1000)
    }
});
