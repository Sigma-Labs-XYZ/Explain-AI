import { useState, useEffect } from "react";
import { fetchData } from "../utils/networking";
import { useParams } from "react-router-dom";
const MAIN_URL = "http://localhost:4000/topic/";

export default function TopicPage() {
  const [retrievedTopics, setRetrievedTopics] = useState();

  let { topic } = useParams();

  useEffect(() => {
    (async function () {
      setRetrievedTopics(await fetchData(MAIN_URL + topic));
    })();
  }, []);

  return (
    <div className="App">
      {console.log(topic)}
      {retrievedTopics && (
        <p data-testid="jsondat">{JSON.stringify(retrievedTopics)}</p>
      )}
    </div>
  );
}
