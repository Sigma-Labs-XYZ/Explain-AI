import React from "react";
import {Link} from 'react-router-dom'
import {TopicsList} from './TopicsList'
export default function HomePage(){

  return (
    <div>
      <h1>HomePage</h1>
      <TopicsList/>
    </div>
  );
}
