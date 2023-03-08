import React, { useContext, useState,useEffect } from "react";
import { ageContext } from "../../../components/AudienceContext";
import "../../../Styling/TopicCard/TopicCard.css";

const CHARS_PER_LINE = 70; 
const LINE_HEIGHT = 25;


export default function TopicCard({ topic }) {
  const { audience } = useContext(ageContext);
  const [descLength, setDescLength] = useState("short");
  const [buttonTxt, setButtonTxt] = useState("Tell me more");
  
  const description = topic.descriptions?.find?.(({ audience: a }) => audience === a)[descLength];
  const imageHandler = () => {
    const imageError = typeof topic.image !== "string" || topic.image === ""; // this may be changed depending on how the API responds
    return imageError ? "./no-image.jpeg" : topic.image;
  };
  const lengthSetter = () => {
    if (descLength === "short") {
      setDescLength("long");
      setButtonTxt("Tell me less");
    } else {
      setDescLength("short");
      setButtonTxt("Tell me more");
    }
  };
  const heightSetter = () => {
    const stringLength = description.length;
    const numberOfLines = Math.ceil(stringLength/CHARS_PER_LINE);
    const pixelHeight =  numberOfLines * LINE_HEIGHT;
    return pixelHeight
  }
  const [topicHeight,setTopicHeight] = useState(heightSetter())
  useEffect(()=> {
    setTopicHeight(heightSetter())
  },[buttonTxt])

  return (
    <div className="topic-card-parent">
      <div className="topic-card">
        <div className="topic-card-title">
          <h1>{topic.name}</h1>
        </div>
        <div style={{"max-height":`${heightSetter()}px`}} className={`topic-card-description ${descLength === "long" ? "expanding" : ""}`}>
          <p data-testid="description-container" className="topic-desc">
            {" "}
            {description}{" "}
          </p>
        </div>
        <div className="topic-card-img-btn">
          <button type="button" onClick={lengthSetter}>
            {buttonTxt}
          </button>
          <div className="topic-card-img">
            <img src={imageHandler()} alt={`A representation of ${topic.name}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
