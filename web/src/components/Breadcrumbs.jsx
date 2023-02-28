import { Link } from "react-router-dom";
import { useState, useEffect, React } from "react";
export default function Breadcrumbs({ grandParent, parent }) {
  return (
    <nav>
      <span>
        <Link to={`/${grandParent.slug}`}>{grandParent.name}</Link>
        <p> > </p>
        <Link to={`/${parent.slug}`}>{parent.name}</Link>
      </span>
    </nav>
  );
}
