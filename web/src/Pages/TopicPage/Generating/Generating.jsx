import React from "react";

// eslint-disable-next-line import/no-extraneous-dependencies
import Lottie from "lottie-react";
import GeneratingAnimation from "./GeneratingAnimation.json";
import "../../../Styling/Generating/generatingPage.css";

export default function Generating({ topic }) {
  return (
    <div className="generating">
      <img className="img" src={topic.image || "/no-image.jpeg"} alt={topic.name} />
      <h1 className="title">Generating {topic.name}</h1>
      <p className="description">
        You are the first person to generate this topic! Please wait for a description to be
        generated.
      </p>
      <Lottie animationData={GeneratingAnimation} loop className="lottie" />
    </div>
  );
}
