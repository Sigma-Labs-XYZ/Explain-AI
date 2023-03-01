import {render,screen} from '@testing-library/react'
import { TopicCard } from '../components/TopicCard'
import test_data from './dummy_data.json'

let topic
describe('Tests for TopicCard using RTL',()=> {
    beforeEach(()=> {
        topic={...test_data.topic[0]} //reset topic
    })
    test('Renders everything in the right roles',()=> {
        render(<TopicCard topic={topic} audience={10}/>)
        const title = screen.getByRole('heading')
        screen.getByText(topic.descriptions[1].short)
        const image = screen.getByRole('img')
        const button = screen.getByRole('button')
        expect(title.textContent).toBe(topic.name)
        expect(button.textContent).toMatch(/Tell me more/i)
        expect(image.src).toBe(topic.image)
    })
    test('Renders dummy image if dummy data has no image',()=> {
        topic.image = false
        render(<TopicCard topic={topic} audience={10}/>)
        const image = screen.getByRole('img')
        expect(image.src).toBe('http://localhost/no-image.jpeg')
    })
    test('JSON is not the correct structure, so an error box appears',()=> {
        topic.descriptions = ''
        render(<TopicCard topic={topic} audience={20}/>)
        screen.getByTestId('error-api')
    })
})

