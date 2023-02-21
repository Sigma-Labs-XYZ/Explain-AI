import "./App.css";
import { fetchTopics } from "./Networking";
import { useState, useEffect } from "react";

function App() {
  const [topics, setTopics] = useState("");
  useEffect(() => {
    (async () => {
      const fetchedTopics = await fetchTopics();
      setTopics(fetchedTopics);
    })();
  }, []);

  return (
    <div className="App">
      <p>{JSON.stringify(topics)}</p>
    </div>
  );
}

export default App;
