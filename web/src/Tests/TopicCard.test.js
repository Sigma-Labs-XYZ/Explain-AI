import {render,screen} from '@testing-library/react'
import { TopicCard } from '../components/TopicCard'
import test_data from './dummy_data.json'
const topic = test_data.topic[0]

describe('Tests for TopicCard using RTL',()=> {
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
        console.log(image.src)
    })
})