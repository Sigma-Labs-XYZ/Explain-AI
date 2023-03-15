import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import fetchData, { postData } from "../../utils/networking";
import Breadcrumbs from "./BreadCrumbs/Breadcrumbs";
import TopicCard from "./TopicCard/TopicCard";
import ErrorMessage from "../../components/ErrorMessage";
import RelationCard from "./RelationCard/RelationCard";
import TopicPageLoading from "./Skeleton/TopicPageLoading";
import { ageContext } from "../../components/AudienceContext";
import { audienceChangeOnSubjectEvent } from "../../utils/gaEvents";
import Generating from "./Generating/Generating";

export default function TopicPage() {
  const { topic } = useParams();
  const [topicData, setTopicData] = useState();
  const { audience } = useContext(ageContext);
  const MAIN_URL = `${process.env.REACT_APP_API_ENDPOINT}/topic/${topic}`;
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDevMode, setIsDevMode] = useState(false);

  function loading() {
    setIsLoading(true);
  }

  useEffect(() => {
    // eslint-disable-next-line consistent-return
    const doFetch = async () => {
      const fetchedData = await fetchData(MAIN_URL);
      // Descriptions were found

      if (fetchedData?.isGenerated) {
        const currentTopicData = fetchedData.topic?.[0];
        setTopicData(currentTopicData);
        // currentTopicData;
        return setIsLoading(false);
      }

      // Descriptions were not found, let's generate them
      if (process.env.NODE_ENV === "development") return setIsDevMode(true);
      const data = fetchedData?.topic?.[0];
      setTopicData(data);
      setIsGenerating(true);
      const GENERATE_URL = `${process.env.REACT_APP_API_ENDPOINT}/topic`;
      const generatedData = await postData({ url: GENERATE_URL, body: { name: topic } });
      const currentTopicData = generatedData?.topic?.[0];
      setTopicData(currentTopicData);
      setIsGenerating(false);
      return setIsLoading(false);
    };
    doFetch();
  }, [MAIN_URL]);

  useEffect(() => {
    audienceChangeOnSubjectEvent(topic, audience);
  }, [audience]);

  if (isDevMode)
    return (
      <div style={{ textAlign: "center", marginTop: 200, color: "white" }}>
        AI generation is not enabled in local development mode
      </div>
    );
  if (isGenerating) return <Generating topic={topicData} />;
  if (isLoading) return <TopicPageLoading />;
  if (topicData?.descriptions.length) {
    return (
      <div data-testid="loadedPage" className="mt-[70px]">
        <Breadcrumbs
          parent={topicData.parent.parent}
          grandParent={topicData.parent.parent.grandparent.grandparent}
          current={topic}
        />
        <TopicCard topic={topicData} />

        <h2 className="text-left text-4xl phone:pl-3 text-white font-extrabold mb-5 mt-28 superWideDesktop:">
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
