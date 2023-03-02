import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../utils/networking";
import Breadcrumbs from "./Breadcrumbs";

export default function TopicPage() {
  const { topic } = useParams();
  const [retrievedTopics, setRetrievedTopics] = useState();

  const MAIN_URL = `${process.env.REACT_APP_API_ENDPOINT}/topic/${topic}`;

  useEffect(() => {
    (async function () {
      setRetrievedTopics(await fetchData(MAIN_URL));
    })();
  }, [MAIN_URL]);

  if (!retrievedTopics) {
    return <>loading</>;
  }
  console.log(retrievedTopics);
  return (
    <div>
      <h1>{topic}</h1>
      <Breadcrumbs
        parent={retrievedTopics.topic[0].parent.parent}
        grandParent={
          retrievedTopics.topic[0].parent.parent.grandparent.grandparent
        }
      />
      <>Test Topic Page ({topic})</>
    </div>
  );
}
