import logo from "./logo.svg";
import "./App.css";
import { fetchTopics } from "./Networking";
import { useState, useEffect } from "react";

function App() {
  const [topics, setTopics] = useState("");
  useEffect(() => {
    (async () => {
      const fetchedTopics = await fetchTopics();
      setTopics(JSON.stringify(fetchedTopics));
    })();
  }, []);

  return (
    <div className="App">
      <p>{topics}</p>
    </div>
  );
}

export default App;
