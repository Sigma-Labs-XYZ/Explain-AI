import { fetchData } from '../utils/fetch';

//attempting to mimic a typical API response. Subject to change.
const typicalResponse = {topic: [
    {name: 'test',
    relationships: [
        {
            priority: 'Priority',
            description: 'described',
            to: {
                name:'related_name'
            }
        }

    ]}
]
}

test("correct fetch should be returned with JSON formatted properly", async () => {
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(typicalResponse)
      }));
    const mockedData = await fetchData();
    expect(mockedData).toBeDefined()
    expect(mockedData).not.toBeNull()
    expect(mockedData.topic).toBeDefined()
    expect(mockedData.topic[0].name).toBeDefined()
    expect(mockedData.topic[0].relationships).toBeDefined()



   
    
  })
