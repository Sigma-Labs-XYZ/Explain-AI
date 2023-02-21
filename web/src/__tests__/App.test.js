import { render, screen} from '@testing-library/react';
import App from '../App';
import { fetchData } from '../utils/fetch';

const object = [{'name':'test','relationships':['test1','test2','test3']}]

test('Renders the title', () => {
  render(<App />);
  const title = screen.getByRole('heading');
  expect(title).toBeInTheDocument();
  expect(title.textContent).toBe('Topics')
});

describe("Mock data", () => {
  //this is in test suite so it doesn't interact with other tests.

  let fetchingData;

  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({topic: object})
    }));
  });

  test("correct fetch should be returned", async () => {
    fetchingData = await fetchData();
    console.log({fetchingData})
    expect(fetchingData).toEqual(JSON.stringify(object));
  })

  test('correct json is presented', async () => {
    console.log('new test') 
    render(<App/>)
    const topic = await screen.findByText(JSON.stringify(object))
    expect(topic).toBeDefined()
    expect(topic.textContent).toBe(JSON.stringify(object))

  })
})
