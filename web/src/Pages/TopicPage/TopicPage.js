import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ageContext } from "./AudienceContext";
import fetchData from "../../utils/networking";
import Breadcrumbs from "./BreadCrumbs/Breadcrumbs";
import TopicCard from "./TopicCard/TopicCard";
import ErrorMessage from "../../components/ErrorMessage";
import RelationCard from "./RelationCard/RelationCard";

export default function TopicPage() {
  const { topic } = useParams();
  const [retrievedTopics, setRetrievedTopics] = useState();
  const { audience } = useContext(ageContext);
  const MAIN_URL = `${process.env.REACT_APP_API_ENDPOINT}/topic/${topic}`;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const doFetch = async () => {
      const fetchedData = await fetchData(MAIN_URL);
      setRetrievedTopics(fetchedData);
      setIsLoading(false);
    };
    doFetch();
  }, [MAIN_URL]);

  if (isLoading) return <div>Loading...</div>;

  const topicData = retrievedTopics?.topic?.[0];

  if (topicData) {
    return (
      <>
        <Breadcrumbs
          parent={topicData.parent.parent}
          grandParent={topicData.parent.parent.grandparent.grandparent}
        />
        <TopicCard topic={retrievedTopics.topic[0]} />

        <h2 className="text-left text-3xl ml-5 text-white font-bold mb-5 mt-16 superWideDesktop:ml-[15%]">
          Related
        </h2>
        {topicData.relationships &&
          topicData.relationships.map((rel) =>
            rel.audience === parseInt(audience, 10) ? (
              <RelationCard
                key={rel.to.name}
                name={rel.to.name}
                description={rel.description}
                image={rel.to.image}
              />
            ) : null,
          )}
      </>
    );
  }
  return <ErrorMessage message={`Failed to find "${topic} ;_; `} />;
}
