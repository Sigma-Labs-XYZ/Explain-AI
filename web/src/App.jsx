import './App.css';
import { React } from 'react';
import Header from './components/Header';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className='App'>
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
