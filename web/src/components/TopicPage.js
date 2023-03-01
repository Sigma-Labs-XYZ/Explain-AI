import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import fetchData from "../utils/networking";

export default function TopicPage() {
  const { topic } = useParams();
  const [retrievedTopics, setRetrievedTopics] = useState();
  const MAIN_URL = `${process.env.REACT_APP_API_ENDPOINT}/topic/${topic}`;

  useEffect(() => {
    async function retrieveTopics() {
      setRetrievedTopics(await fetchData(MAIN_URL));
    }
    retrieveTopics();
  }, [MAIN_URL]);

  return (
    <div>
      <h1>{topic}</h1>
      {retrievedTopics && <p data-testid="jsondat">{JSON.stringify(retrievedTopics)}</p>}
    </div>
  );
}
