import './App.css';
import { fetchData } from './utils/fetch';
import {useState, useEffect} from 'react'

function App()  {
  const [topics, setTopics] = useState(undefined)
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData();
      setTopics(data.topic)
    }
    fetch()
  }, [])
  const generateTopicPage = topics=> {
    if (topics) {
      return <p>
        {JSON.stringify(topics)}
      </p>
    } else {
      return <p>Cannot be found</p>
    }
  }
  return (
    <div className="App">
      <header>
      <h1>Topics</h1>
      </header>
      <main>
        {generateTopicPage(topics)}
     </main>
    </div>
  );
}

export default App;
