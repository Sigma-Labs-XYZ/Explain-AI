import React, { useState } from "react";
import "../Styling/TopicCard/TopicCard.css";

export default function TopicCard({ topic, audience }) {
  const description = topic.descriptions?.find?.(({ audience: a }) => audience === a)?.short;
  const imageHandler = () => {
    const imageError = typeof topic.image !== "string" || topic.image === ""; // this may be changed depending on how the API responds
    return imageError ? "./no-image.jpeg" : topic.image;
  };
  return (
    <div className="topic-card-parent">
      <div className="topic-card">
        <div className="topic-card-title">
          <h1>{topic.name}</h1>
        </div>
        <div className="topic-card-description">
          <p> {description} </p>
        </div>
        <div className="topic-card-img-btn">
          <button type="button">Tell me more</button>
          <div className="topic-card-img">
            <img src={imageHandler()} alt={`A representation of ${topic.name}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
