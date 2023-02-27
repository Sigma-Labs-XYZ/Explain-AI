import { Link } from "react-router-dom";
import { useState, useEffect, React } from "react";
export default function Breadcrumbs({ grandParent, parent }) {
  return (
    <nav>
      <span>
        <Link to={`/:${grandParent}`}>grandFatherTopic</Link>
        <p> > </p>
        <Link to={`/:${parent}`}>fatherTopic</Link>
      </span>
    </nav>
  );
}
