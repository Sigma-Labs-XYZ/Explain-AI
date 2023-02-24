import "./App.css";
import { useState, useEffect } from "react";
import { fetchData } from "./utils/networking";

const MAIN_URL = "http://localhost:4000/topics";
function App() {
  const [retrievedTopics, setRetrievedTopics] = useState();

  useEffect(() => {
    (async function () {
      setRetrievedTopics(await fetchData(MAIN_URL));
    })();
  }, []);

  return (
    <div className="App">
      {retrievedTopics && (
        <p data-testid="jsondat">{JSON.stringify(retrievedTopics)}</p>
      )}
    </div>
  );
}

export default App;
