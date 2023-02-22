import {BrowserRouter} from 'react-router-dom'
import AppRouter from './AppRouter';

export function App() {
    return (
        <BrowserRouter>
        <AppRouter />
        </BrowserRouter>
    )
}

export default App