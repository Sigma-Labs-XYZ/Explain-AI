import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../utils/networking";
import { ErrorMessage } from "./ErrorMessage";
import TopicCard from "./TopicCard";

export default function TopicPage() {
  const { topic } = useParams();
  const [retrievedTopics, setRetrievedTopics] = useState();
  const [audience, setAudience] = useState();
  useEffect(() => {
    const storedAge = localStorage.getItem("age");
    if (storedAge) {
      setAudience(parseInt(localStorage.getItem("age"), 10));
    } else {
      // defaults to 5
      localStorage.setItem("age", 5);
      setAudience(5);
    }
  }, [audience]);
  const MAIN_URL = `${process.env.REACT_APP_API_ENDPOINT}/topic/${topic}`;
  useEffect(() => {
    async function getTopicData() {
      const fetchedData = await fetchData(MAIN_URL);
      const topicExists = fetchedData.topic && fetchedData.topic.length !== 0;
      setRetrievedTopics(fetchedData && topicExists ? fetchedData : null);
    }
    getTopicData();
  }, [MAIN_URL]);
  if (retrievedTopics) {
    return <TopicCard topic={retrievedTopics.topic[0]} audience={audience} />;
  }
  return <ErrorMessage message={`Failed to find "${topic} ;_; `} />;
}
