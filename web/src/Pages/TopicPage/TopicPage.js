import React, { useState, useEffect, useContext } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams } from "react-router-dom";
import fetchData, { postData } from "../../utils/networking";
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
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      const fetchedData = await fetchData(MAIN_URL);
<<<<<<< HEAD
      setRetrievedTopics(fetchedData);
      const data = fetchedData?.topic?.[0];

      setTopicData(data);
      setIsLoading(false);
=======
      // Descriptions were found
      if (fetchedData.isGenerated) {
        setRetrievedTopics(fetchedData);
        return setIsLoading(false);
      }
      // Descriptions were not found, let's generate them
      setIsGenerating(true);
      const GENERATE_URL = `${process.env.REACT_APP_API_ENDPOINT}/topic`;
      const generatedData = await postData({ url: GENERATE_URL, body: { name: topic } });
      setRetrievedTopics(generatedData);
      setIsGenerating(false);
      return setIsLoading(false);
>>>>>>> main
    };
    doFetch();
  }, [MAIN_URL]);

  useEffect(() => {
    audienceChangeOnSubjectEvent(topic, audience);
  }, [audience]);

<<<<<<< HEAD
  function loading() {
    setIsLoading(true);
  }
  if (isLoading) return <TopicPageLoading />;

  if (topicData) {
=======
  if (isGenerating) return <div style={{ textAlign: "center", marginTop: 200 }}>Generating...</div>;
  if (isLoading) return <div>Loading...</div>;
  const topicData = retrievedTopics?.topic?.[0];
  if (topicData?.descriptions.length) {
>>>>>>> main
    return (
      <div className="mt-[70px]">
        <Breadcrumbs
          parent={topicData.parent.parent}
          grandParent={topicData.parent.parent.grandparent.grandparent}
          current={topic}
        />
        <TopicCard
          topic={topicData}
          // isLoading={isLoading}
          // setIsLoading={setIsLoading}
        />

        <h2 className="text-left text-3xl ml-5 text-white font-bold mb-5 mt-16 superWideDesktop:ml-[15%]">
          Related
        </h2>

<<<<<<< HEAD
=======
        <h2 className="text-left text-4xl ml-5 text-white font-extrabold mb-5 mt-28 superWideDesktop:ml-[14.5%]">
          Related
        </h2>
        {/* <h1 className="text-left text-white ml-5 mb-5 mt-16 superWideDesktop:ml-[15%]">Related</h1> */}
>>>>>>> main
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
