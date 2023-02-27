import '../Styling/TopicCard.css'
import {useState} from 'react'

function findShortDescription(descriptions,audience) {
    return descriptions.filter(description=> {
        return description.audience===audience
    }).map(des=>des.short)
}


export function TopicCard({topic,audience}) {
    const [error,setError] = useState(false)
    let description;
    try {
        description = findShortDescription(topic.descriptions,audience)
    } catch(err) {
        setError(true)
    }
    const imageHandler = ()=> {
        if (typeof topic.image!=='string' || topic.image==="") {
            return '/no-image.jpeg'
        }
        else {
            return topic.image
        }
    }
    const descriptionHandler = (description)=> {
        if (error) {
            return (
                <div className='error'>
                    <h1>Error</h1>
                    <p>Something went wrong on our side!</p>
                </div>
            )
        }
        else {
            return description
        }
    }
    console.log(description)
    return (
        <div className="topic-card-parent">
            <div className='topic-card'>
                <div className='topic-card-title'>
                    <h1>
                        {topic.name}
                    </h1>
                </div>
                <div className='topic-card-description'>
                    <p>
                        {descriptionHandler(description)}
                    </p>
                </div>
                <div className='topic-card-img-btn'>
                    <button>
                        Tell me more
                    </button>
                    <div className = 'topic-card-img'>
                    <img src={imageHandler()} alt={`A representation of ${topic.name}`}/>
                    </div>
            </div>
            </div>

        </div>
    )
}