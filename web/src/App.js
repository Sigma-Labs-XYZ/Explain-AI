import "./App.css";
import { useState, useEffect } from "react";
import { fetchData } from "./utils/networking";

const MAIN_URL = `${process.env.REACT_APP_API_ENDPOINT}/topics`;
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
