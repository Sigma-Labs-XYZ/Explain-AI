import '../Styling/TopicCard.css'
function findShortDescription(descriptions,audience) {
    return descriptions.filter(description=> {
        return description.audience===audience
    }).map(des=>des.short)
}


export function TopicCard({topic}) {
    const audience = 20//this will be passed through as a prop later on from the Header
    const description = findShortDescription(topic.descriptions,audience)
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
                        {description}
                    </p>
                </div>
                <div className='topic-card-img-btn'>
                    <button>
                        Tell me more
                    </button>
                    <img src={topic.image} alt={`A representation of ${topic.name}`}/>
            </div>
            </div>

        </div>
    )
}