import {render,screen} from '@testing-library/react'
import { TopicCard } from '../components/TopicCard'

const test_data = await (await fetch('./dummy_data.json')).json()

describe('Tests for TopicCard',()=> {
    test('Renders information correctly',()=> {
        render(<TopicCard />)
    })
})