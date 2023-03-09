import React, { useState, useEffect, useContext } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams } from "react-router-dom";
import fetchData from "../../utils/networking";
import Breadcrumbs from "./BreadCrumbs/Breadcrumbs";
import TopicCard from "./TopicCard/TopicCard";
import ErrorMessage from "../../components/ErrorMessage";
import RelationCard from "./RelationCard/RelationCard";
import TopicPageLoading from "./Skeleton/TopicPageLoading";
import { ageContext } from "../../components/AudienceContext";
import { audienceChangeOnSubjectEvent } from "../../utils/gaEvents";

export default function TopicPage() {
  const { topic } = useParams();
  const [retrievedTopics, setRetrievedTopics] = useState();
  const [topicData, setTopicData] = useState();
  const { audience } = useContext(ageContext);
  const MAIN_URL = `${process.env.REACT_APP_API_ENDPOINT}/topic/${topic}`;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const doFetch = async () => {
      console.log(`doing a fetch for ${topic}`);
      const fetchedData = await fetchData(MAIN_URL);
      setRetrievedTopics(fetchedData);
      const data = fetchedData?.topic?.[0];

      setTopicData(data);

      setIsLoading(false);
    };
    doFetch();
  }, [MAIN_URL]);

  useEffect(() => {
    audienceChangeOnSubjectEvent(topic, audience);
  }, [audience]);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  function loading() {
    setIsLoading(true);
  }
  if (isLoading) return <TopicPageLoading />;

  if (topicData) {
    return (
      <div className="mt-[70px]">
        <Breadcrumbs
          parent={topicData.parent.parent}
          grandParent={topicData.parent.parent.grandparent.grandparent}
          current={topic}
        />
        <TopicCard
          topic={retrievedTopics.topic[0]}
          // isLoading={isLoading}
          // setIsLoading={setIsLoading}
        />

        <h2 className="text-left text-3xl ml-5 text-white font-bold mb-5 mt-16 superWideDesktop:ml-[15%]">
          Related
        </h2>

        {topicData.relationships &&
          topicData.relationships.map((rel) =>
            rel.audience === audience ? (
              <RelationCard
                key={rel.to.name}
                name={rel.to.name}
                description={rel.description}
                image={rel.to.image}
                parent={topic}
                // eslint-disable-next-line react/jsx-no-bind
                loading={loading}
              />
            ) : null,
          )}
      </div>
    );
  }
  return <ErrorMessage message={`Failed to find "${topic} ;_; `} />;
}
