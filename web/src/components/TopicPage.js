import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../utils/networking";

import RelationCard from "./RelationCard";
import { TopicCard } from "./TopicCard";
import { ErrorMessage } from "./ErrorMessage";

export default function TopicPage() {
  const { topic } = useParams();
  const [retrievedTopics, setRetrievedTopics] = useState();
  const [relationships, setRelationships] = useState();
  const [audience, setAudience] = useState();
  const MAIN_URL = `${process.env.REACT_APP_API_ENDPOINT}/topic/${topic}`;
  useEffect(() => {
    const storedAge = localStorage.getItem("age");
    if (storedAge) {
      setAudience(parseInt(localStorage.getItem("age")));
    } else {
      //defaults to 5
      localStorage.setItem("age", 5);
      setAudience(5);
    }
  }, [audience]);
  useEffect(() => {
    (async function () {
      const data = await fetchData(MAIN_URL);
      setRelationships(data?.topic[0].relationships);
      setRetrievedTopics(data);
    })();
  }, [MAIN_URL]);

  const fetchedTopic = retrievedTopics?.topic[0];

  if (!fetchedTopic)
    return <ErrorMessage message={`Failed to find "${topic} ;_; `} />;
  return (
    <div>
      <h1>{topic}</h1>
      <TopicCard topic={fetchedTopic} audience={audience} />

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
    </div>
  );
}
