import '../Styling/TopicCard.css'
import {useState} from 'react'
function findShortDescription(descriptions,audience) {
    return descriptions.filter(description=> {
        return description.audience===audience
    }).map(des=>des.short)
}


export function TopicCard({topic}) {
    const audience = 20//this will be passed through as a prop later on from the Header
    const [error,setError] = useState(false)
    let description;
    try {
        description = findShortDescription(topic.descriptions,audience)
    } catch(err) {
        setError(true)
    }
    const imgErrorHandler = ({currentTarget})=> {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src="./no-image.jpeg";

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
                    <img src={topic.image} onError={imgErrorHandler} alt={`A representation of ${topic.name}`}/>
                    </div>
            </div>
            </div>

        </div>
    )
}