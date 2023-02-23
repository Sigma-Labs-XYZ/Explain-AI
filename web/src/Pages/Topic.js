
import React,{useEffect,useState} from "react";
import { fetchData } from "../utils/networking";
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom'

const MAIN_URL = "http://localhost:4000";

export default function Topic() {
  const [retrievedTopics, setRetrievedTopics] = useState();
  const {topicOfInterest} = useParams()

  useEffect(() => {
    (async function () {
      setRetrievedTopics(await fetchData(MAIN_URL + "/topic/" + topicOfInterest)); //fetches when topic of interest changes
    })();
  }, [topicOfInterest]);

  return (
    <div>
      <nav>
        <Link to="/">Homepage</Link>
      </nav>
      <h2>{topicOfInterest}</h2>
      <div >
      {retrievedTopics && (
        <p data-testid="jsondat">{JSON.stringify(retrievedTopics)}</p>
      )}
      </div>
    </div>
  );
}
