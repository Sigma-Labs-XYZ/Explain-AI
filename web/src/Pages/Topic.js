import FetchDataDiv from "../Components/fetchDataDiv";
import React from "react";
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom'

export default function Topic({ retrievedTopics }) {
  const {toi} = useParams()

  return (
    <div>
      <nav>
        <Link to="/">Homepage</Link>
      </nav>
      <h2>{toi}</h2>
      <FetchDataDiv retrievedTopics={retrievedTopics} />
    </div>
  );
}
