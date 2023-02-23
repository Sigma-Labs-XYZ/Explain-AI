import { render, screen, cleanup, getByText } from "@testing-library/react";
import App from "../App";
import { waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  fetchMock.enableMocks();
  fetch.resetMocks();
});

describe('React Router testing',()=> {

  test('Homepage is rendered ',()=> {
    render(<App/>)
    const title = screen.getByText(/HomePage/i)
    const topicsLink = screen.getByText('Topics')
    
  })
  test('Links are on the HomePage and arent empty string',async ()=> {
    render(<App/>)
    const links = screen.getAllByRole('link')
    expect(links).toBeDefined()
    expect(links[0]).toBeDefined() //expect there to be at least 1 element in the list
    for (let link of links) {
      expect(link.textcontent).not.toBe('')
    }
  })
  test('Link renders a title with a description',async ()=> {
    render(<App/>)
    const jsLink = screen.getAllByRole('link')[0]

    const linkName = jsLink.textContent
    await userEvent.click(jsLink)
    expect(screen.getByRole('link').textContent).toMatch(/HomePage/i) //expect there to be a link back to homepage
    const title = screen.getByRole('heading')
    const regexMatch = new RegExp(linkName,'i')
    expect(title.textContent).toMatch(regexMatch)
    
    
  })
})

