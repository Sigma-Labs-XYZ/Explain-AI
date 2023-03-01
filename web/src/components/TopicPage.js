import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../utils/networking";
import RelationCard from "./RelationCard";

export default function TopicPage() {
  const { topic } = useParams();
  const [retrievedTopics, setRetrievedTopics] = useState();
  const [relationships, setRelationships] = useState();
  const MAIN_URL = `${process.env.REACT_APP_API_ENDPOINT}/topic/${topic}`;

  useEffect(() => {
    (async function () {
      const data = await fetchData(MAIN_URL);
      setRetrievedTopics(data);
      setRelationships(data.topic[0].relationships);
    })();
  }, [MAIN_URL]);

  return (
    <div>
      <h1>{topic}</h1>
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
