import '../Styling/TopicCard/TopicCard.css'
export function ErrorMessage({message}) {
    return (
        <div className='api-error-container'>
        <div data-testid='error-api' className='api-error'>
            <h1>Error</h1>
            <h2>{message}</h2>
        </div>
    </div>
    )
    
}