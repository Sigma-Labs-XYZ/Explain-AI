import {render,screen} from '@testing-library/react'
import { TopicCard } from '../components/TopicCard'
import test_data from './dummy_data.json'
const topic = test_data.topic[0]

describe('Tests for TopicCard',()=> {
    test('Renders information correctly',()=> {
        render(<TopicCard topic={topic}/>)
        const title = screen.getByRole('heading')
        const description = screen.getByRole('')
        expect(title.textContent).toBe(topic.name)

    })
})