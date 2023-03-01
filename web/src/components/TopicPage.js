import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../utils/networking";
import { TopicCard } from "./TopicCard";

export default function TopicPage() {
  const { topic } = useParams();
  const [retrievedTopics, setRetrievedTopics] = useState();
  const [audience,setAudience] = useState()
  useEffect(()=> {
    const storedAge = localStorage.getItem('age')
    if (storedAge) {
      setAudience(parseInt(localStorage.getItem('age')))
    }
    else {
      //defaults to 5
      localStorage.setItem('age',5)
      setAudience(5)
    }
  },[audience])
  const MAIN_URL = `${process.env.REACT_APP_API_ENDPOINT}/topic/${topic}`;
  useEffect(() => {
    (async function () {
      const fetchedData = await fetchData(MAIN_URL);
      setRetrievedTopics(fetchedData ? fetchedData : undefined);
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
