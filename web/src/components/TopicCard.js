
function findShortDescription(descriptions,audience) {
    return descriptions.filter(description=> {
        return description.audience===audience
    }).map(des=>des.short)
}


export function TopicCard({topic}) {
    const audience = 5 //this will be passed through as a prop later on from the Header
    const description = findShortDescription(topic.descriptions,audience)
    console.log(description)
    return (
        <div className="topic-card">
            <h1>
                {topic.name}
            </h1>
            <p>
                {description}
            </p>

        </div>
    )
}