import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../utils/networking";
import Breadcrumbs from "./Breadcrumbs";
import TopicCard from "./TopicCard";
import { ErrorMessage } from "./ErrorMessage";

export default function TopicPage() {
  const { topic } = useParams();
  const [retrievedTopics, setRetrievedTopics] = useState();
  const [audience, setAudience] = useState();
  const MAIN_URL = `${process.env.REACT_APP_API_ENDPOINT}/topic/${topic}`;
  useEffect(() => {
    const storedAge = localStorage.getItem("age");
    if (storedAge) {
      setAudience(parseInt(localStorage.getItem("age"), 10));
    } else {
      localStorage.setItem("age", 5);
      setAudience(5);
    }
  }, [audience]);
  useEffect(() => {
    const doFetch = async () => {
      const fetchedData = await fetchData(MAIN_URL);
      const topicExists = fetchedData.topic && fetchedData.topic.length !== 0;
      setRetrievedTopics(fetchedData && (topicExists ? fetchedData : null));
    };
    doFetch();
  }, [MAIN_URL]);
  if (retrievedTopics) {
    return (
      <>
        <Breadcrumbs
          parent={retrievedTopics.topic[0].parent.parent}
          grandParent={retrievedTopics.topic[0].parent.parent.grandparent.grandparent}
        />
        <TopicCard topic={retrievedTopics.topic[0]} audience={audience} />
      </>
    );
  }
  return <ErrorMessage message={`Failed to find "${topic} ;_; `} />;
}
