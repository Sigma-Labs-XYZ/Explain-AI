import { useState, useEffect } from "react";
import { fetchData } from "../utils/networking";
const MAIN_URL = "http://localhost:4000/topic/";

export default function TopicPage() {
  const [retrievedTopics, setRetrievedTopics] = useState();
  const [topic, setTopicName] = useState("javascript");

  useEffect(() => {
    (async function () {
      setRetrievedTopics(await fetchData(MAIN_URL + topic));
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
