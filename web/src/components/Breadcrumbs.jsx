import { Link } from "react-router-dom";
import { useState, useEffect, React } from "react";
export default function Breadcrumbs({ mainTopic }) {
  const [fatherTopic, setFatherTopic] = useState();
  const [grandFatherTopic, setGrandFatherTopic] = useState();

  function findCatergory(mainTopic) {
    // TODO:
    // QUERY API FOR CATEGORY TOPIC OF MAIN TOPIC
    // SET FATHER TOPIC
    // QUERY API FOR CATEGORY TOPIC OF FATHER TOPIC
    // SET GRANDFATHER TOPIC
  }
  return (
    <nav>
      <Link to={`/:${grandFatherTopic}`}>{grandFatherTopic}</Link>
      <Link to={`/:${fatherTopic}`}>{fatherTopic}</Link>
    </nav>
  );
}
