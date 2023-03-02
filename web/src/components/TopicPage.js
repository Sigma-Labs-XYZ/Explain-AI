import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../utils/networking";
import Breadcrumbs from "./Breadcrumbs";
import { TopicCard } from "./TopicCard";
import { ErrorMessage } from "./ErrorMessage";

export default function TopicPage() {
  const { topic } = useParams();
  const [retrievedTopics, setRetrievedTopics] = useState();
  const [audience, setAudience] = useState();
  const [relationships, setRelationships] = useState();
  const MAIN_URL = `${process.env.REACT_APP_API_ENDPOINT}/topic/${topic}`;
  useEffect(() => {
    const storedAge = localStorage.getItem("age");
    if (storedAge) {
      setAudience(parseInt(localStorage.getItem("age")));
    } else {
      localStorage.setItem("age", 5);
      setAudience(5);
    }
  }, [audience]);
  useEffect(() => {
    (async function () {
      const fetchedData = await fetchData(MAIN_URL);
      const topicExists = fetchedData.topic && fetchedData.topic.length !== 0;
      setRetrievedTopics(fetchedData && topicExists ? fetchedData : undefined);

      setRelationships(fetchedData?.topic[0].relationships);
    })();
  }, [MAIN_URL]);
  if (retrievedTopics) {
    return (
      <>
        <Breadcrumbs
          parent={retrievedTopics.topic[0].parent.parent}
          grandParent={
            retrievedTopics.topic[0].parent.parent.grandparent.grandparent
          }
        />
        <TopicCard topic={retrievedTopics.topic[0]} audience={audience} />

        <h2 className="text-left text-3xl ml-5 text-white font-bold mb-5 superWideDesktop:ml-[15%]">
          Related
        </h2>
        {relationships &&
          relationships.map((rel, i) => {
            return (
              <RelationCard
                key={i}
                name={rel.to.name}
                description={rel.description}
              />
            );
          })}
      </>
    );
  } else {
    return (
      <>
        <ErrorMessage message={`Failed to find "${topic} ;_; `} />
      </>
    );
  }
}
