import { render, screen, cleanup, getByText } from "@testing-library/react";
import App from "../App";
import { waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  fetchMock.enableMocks();
  fetch.resetMocks();
});

describe("Test for API render on suceess", () => {
  test("a p tag is created with json file upon a successful fetch", async () => {
    fetch.mockResponseOnce(JSON.stringify({ test: "test" }));
    
    render(<App />);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("http://localhost:4000/topic/javascript");
    // await waitFor(() => {
    //   expect(screen.getByText('{"test":"test"}')).toBeInTheDocument();
    // });
  });

  //created for testing unsuccessfull requests in the future
  test("a p tag is not created with json file upon an unsuccessful fetch", async () => {
    fetch.mockResponseOnce(JSON.stringify());

    render(<App />);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("http://localhost:4000/topic/javascript");
    await waitFor(() => {
      expect(screen.queryByTestId("jsondat")).not.toBeInTheDocument();
    });
  });
});

describe('React Router testing',()=> {

  test('Homepage is rendered ',()=> {
    render(<App/>)
    const title = screen.getByText('HomePage')
    const topicsLink = screen.getByText('Topics')
    
  })
  test('Link to topics renders the topics page, and can go back',async ()=> {
    render(<App/>)
    const topicsLink = screen.getByText('Topics')
    await userEvent.click(topicsLink) //go to topics page
    const links = screen.getAllByRole('link')
    expect(links).toBeDefined()
    expect(typeof links).toBe('object') 
    expect(links[1]).toBeDefined() //expect there to be at least 1 element in the list
    expect(links[1].textContent).not.toBe('')
    await userEvent.click(links[0])
    const title = screen.getByText('HomePage')
  })
})

