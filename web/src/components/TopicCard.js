import '../Styling/TopicCard/TopicCard.css'
import {useState} from 'react'


export function TopicCard({topic,audience}) {
    const [error,setError] = useState(false)
    const  getDescription = (descriptions,audience,length)=> {
        try {
            return descriptions.filter(description=> {
                return description.audience===audience
            }).map(des=>des.short)
        }
        catch {
            setError(true)
        }
    }
    const imageHandler = ()=> {
        const imageError = typeof topic.image !=='string' || topic.image===''//this may be changed depending on how the API responds
        return (imageError? './no-image.jpeg' : topic.image)
    }
    if (!error) {
        return (
            <div className="topic-card-parent">
                <div className='topic-card'>
                    <div className='topic-card-title'>
                        <h1>{topic.name}</h1>
                    </div>
                    <div className='topic-card-description'>
                        <p> {getDescription(topic.descriptions,audience,'short')} </p>
                    </div>
                    <div className='topic-card-img-btn'>
                        <button>Tell me more</button>
                        <div className = 'topic-card-img'>
                        <img src={imageHandler()} alt={`A representation of ${topic.name}`}/>
                        </div>
                    </div>
                </div>

            </div>
        )}

    else {
        return (
            <div data-testid='error-api' className='api-error'>
                <h1>Error</h1>
                <h2>The API format of this particular element is unreadable.</h2>
            </div>
        )
    }
}