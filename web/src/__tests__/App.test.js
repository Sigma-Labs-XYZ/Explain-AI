import { render, screen } from '@testing-library/react';
import App from '../App';

test('Renders the title', () => {
  render(<App />);
  const title = screen.getByRole('heading');
  expect(title).toBeInTheDocument();
  expect(title.textContent).toBe('Topics')
});

test('JSON is rendered within document',async ()=> {
    render(<App />);
    const object = JSON.stringify([{"name":"Javascript","relationships":[{"priority":0,"description":"Javascript and CSS work together to make websites look good and function properly.","to":{"name":"CSS"}},{"priority":0,"description":"JavaScript is used to add interactivity to HTML pages.","to":{"name":"HTML"}}]},{"name":"HTML","relationships":[]},{"name":"CSS","relationships":[]},{"name":"React","relationships":[]}])
    const json = await screen.findByText(object)
    console.log(json.textContent)
    expect(json).toBeDefined()   
})