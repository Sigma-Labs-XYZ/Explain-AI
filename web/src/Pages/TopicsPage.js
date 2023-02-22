import FetchDataDiv from "../Components/fetchDataDiv";
import React from "react";
import { Link } from "react-router-dom";

export default function TopicsPage({ retrievedTopics }) {
  return (
    <div>
      <nav>
        <Link to="/">Homepage</Link>
      </nav>
      <FetchDataDiv retrievedTopics={retrievedTopics} />
    </div>
  );
}
