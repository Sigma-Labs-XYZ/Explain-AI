import '../Styling/ErrorMessage/ErrorMessage.css'
export function ErrorMessage({message}) {
    return (
    <div className='error-container'>
        <div data-testid='error-message' className='error-message'>
            <h1>Error</h1>
            <h2>{message}</h2>
        </div>
    </div>
    )
    
}