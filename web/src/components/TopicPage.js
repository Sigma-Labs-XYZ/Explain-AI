import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../utils/networking";
import Breadcrumbs from "./Breadcrumbs";

export default function TopicPage() {
  const { topic } = useParams();
  const [retrievedTopics, setRetrievedTopics] = useState();
  const [fatherTopic, setFatherTopic] = useState();
  const [grandFatherTopic, setGrandFatherTopic] = useState();
  const MAIN_URL = `http://localhost:4000/topic/${topic}`; // change this at the end

  useEffect(() => {
    (async function () {
      setRetrievedTopics(await fetchData(MAIN_URL));
    })();
  }, [MAIN_URL]);

  function findCatergory(mainTopic) {
    // TODO:
    // QUERY API FOR CATEGORY TOPIC OF MAIN TOPIC
    // SET FATHER TOPIC
    setFatherTopic(retrievedTopics.topic[0].parent.parent);
    setGrandFatherTopic(
      retrievedTopics.topic[0].parent.parent.grandparent.grandparent
    );
    // QUERY API FOR CATEGORY TOPIC OF FATHER TOPIC
    // SET GRANDFATHER TOPIC
  }

  return (
    <div>
      <h1>{topic}</h1>
      <Breadcrumbs
        fatherTopic={fatherTopic}
        grandFatherTopic={grandFatherTopic}
      />
      {retrievedTopics && (
        <p data-testid="jsondat">{JSON.stringify(retrievedTopics)} </p>
      )}
    </div>
  );
}
