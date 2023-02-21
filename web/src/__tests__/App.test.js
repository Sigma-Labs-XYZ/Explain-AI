import { render, screen} from '@testing-library/react';
import App from '../App';
import { fetchData } from '../utils/fetch';

const object = {topic: [{'name':'test','relationships':['test1','test2','test3']}]}

test('Renders the title', () => {
  render(<App />);
  const title = screen.getByRole('heading');
  expect(title).toBeInTheDocument();
  expect(title.textContent).toBe('Topics')
});

describe("Mock data", () => {
  //this is in a describe so the beforeEach doesn't interact with other tests.
  let fetchingData;
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(object)
    }));
  });

  test("correct fetch should be returned", async () => {
    fetchingData = await fetchData();
    expect(fetchingData).toEqual(object);
  })

  test('correct json is presented', async () => {
    render(<App/>)
    const topic = await screen.findByText(JSON.stringify(object.topic))
    expect(topic).toBeDefined()
    expect(topic.textContent).toBe(JSON.stringify(object.topic))

  })
})
