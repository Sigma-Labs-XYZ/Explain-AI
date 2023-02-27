import '../Styling/TopicCard.css'
import {useState,useEffect} from 'react'


export function TopicCard({topic,audience}) {
    const [error,setError] = useState(false)
    const  findShortDescription = (descriptions,audience)=> {
        try {
        return descriptions.filter(description=> {
            return description.audience===audience
        }).map(des=>des.short)
        }
        catch {
            setError(true)
        }
    }
    useEffect(()=> {
            findShortDescription(topic.descriptions,audience)
    },[])
    
    const imageHandler = ()=> {
        if (typeof topic.image!=='string' || topic.image==="") {
            return './no-image.jpeg'
        }
        else {
            return topic.image
        }
    }
    const descriptionHandler = ()=> {
        if (error) {
            return (
                <div data-testid='error-api' className='error'>
                    <h1>Error</h1>
                    <h2>Something went wrong on our side!</h2>
                </div>
            )
        }
        else {
            return findShortDescription(topic.descriptions,audience)
        }
    }
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
                        {descriptionHandler()}
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