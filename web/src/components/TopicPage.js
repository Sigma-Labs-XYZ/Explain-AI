import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../utils/networking";
import { TopicCard } from "./TopicCard";

export default function TopicPage() {
  const { topic } = useParams();
  const [retrievedTopics, setRetrievedTopics] = useState();
  const [audience,] = useState(parseInt(localStorage.getItem('age') || localStorage.setItem('age',5) || 5))
  
  const MAIN_URL = `${process.env.REACT_APP_API_ENDPOINT}/topic/${topic}`;
  console.log(audience)
  useEffect(() => {
    (async function () {
      const fetchedData = await fetchData(MAIN_URL);
      if (fetchedData) {
        setRetrievedTopics(fetchedData);
      } else {
        setRetrievedTopics(undefined);
      }
    })();
  }, [MAIN_URL,audience]);

  return (
    <div>

      {retrievedTopics && (
        <TopicCard topic={retrievedTopics.topic[0]} audience={audience}/>
      )}
    </div>
  );
}
