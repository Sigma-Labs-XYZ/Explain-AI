import { render, screen } from '@testing-library/react';
import App from '../App';
import { fetchData } from '../utils/fetch';

const object = [{"name":"Javascript","relationships":[{"priority":0,"description":"Javascript and CSS work together to make websites look good and function properly.","to":{"name":"CSS"}},{"priority":0,"description":"JavaScript is used to add interactivity to HTML pages.","to":{"name":"HTML"}}]},{"name":"HTML","relationships":[]},{"name":"CSS","relationships":[]},{"name":"React","relationships":[]}]

test('Renders the title', () => {
  render(<App />);
  const title = screen.getByRole('heading');
  expect(title).toBeInTheDocument();
  expect(title.textContent).toBe('Topics')
});

test('JSON is rendered within document', async () => {
    render(<App />);
    const json = await screen.findByText(JSON.stringify(object))
    expect(json).toBeDefined()   
    expect(json.textContent).toBe(JSON.stringify(object))
})



describe("Mock data", () => {
  //this is in test suite so it doesn't interact with other tests.

  let fetchingData;

  // beforeEach(() => {
  // //     global.fetch = jest.fn(() => Promise.resolve({
  // //   json: () => Promise.resolve({test:'test'}),
  // // }));
    
  // });

  test("correct fetch should be returned", async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({topic:[{'name':'test','relationships':['test1','test2','test3']}]})
    }));
    fetchingData = await fetchData();
    console.log({fetchingData})
    expect(fetchingData).toEqual(JSON.stringify([{'name':'test','relationships':['test1','test2','test3']}]));
  })
})

// test('fetch data is mocked', async () => {
//   render(<App/>)
//   const json = await screen.findByText(JSON.stringify(object))
//   expect(json).toBeDefined()   
//   expect(json.textContent).toBe(JSON.stringify(object))
// })
