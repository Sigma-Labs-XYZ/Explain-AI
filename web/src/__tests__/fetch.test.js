import { fetchData } from '../utils/fetch';
test('API is being called', async () => {
    const object = JSON.stringify([{"name":"Javascript","relationships":[{"priority":0,"description":"Javascript and CSS work together to make websites look good and function properly.","to":{"name":"CSS"}},{"priority":0,"description":"JavaScript is used to add interactivity to HTML pages.","to":{"name":"HTML"}}]},{"name":"HTML","relationships":[]},{"name":"CSS","relationships":[]},{"name":"React","relationships":[]}])
    const actualFetch = await fetchData()
    expect(object).toEqual(actualFetch)
})
