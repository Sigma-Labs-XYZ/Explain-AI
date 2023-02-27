import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../utils/networking";
import RelationCard from "./RelationCard";

export default function TopicPage() {
  const { topic } = useParams();
  const [retrievedTopics, setRetrievedTopics] = useState();
  const [relationships, setRelationships] = useState();
  const MAIN_URL = `http://localhost:4000/topic/${topic}`;

  useEffect(() => {
    (async function () {
      const data = await fetchData(MAIN_URL);
      setRetrievedTopics(data);
      setRelationships(data.topic[0].relationships);
    })();
  }, []);

  return (
    <div>
      <h1>{topic}</h1>
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
