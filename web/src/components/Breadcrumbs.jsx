import { Link } from "react-router-dom";
import { React } from "react";

import "../App.css";
export default function Breadcrumbs({ grandParent, parent }) {
  return (
    <>
      <nav data-testid="desktop">
        <span className="mr-120 w-screen bg-backdrop text-white capitalize">
          <Link to={`/${grandParent.slug}`}>{grandParent.name} </Link>
          <span data-testid="desktop-grandParent" className="font-thin">
            >
          </span>
          <Link to={`/${parent.slug}`}>{parent.name} </Link>
          <span data-testid="desktop-parent" className="font-thin">
            {" "}
            >{" "}
          </span>
        </span>
      </nav>

      <div id="mobile" data-testid="mobile" className="text-white capitalize ">
        <div
          data-testid="mobile-grandparent"
          className="bg-backdrop2 pb-2 pt-2 text-left"
        >
          <Link className="ml-7" to={`/${grandParent.slug}`}>
            {grandParent.name}
          </Link>
          <span className="font-thin"> > </span>
        </div>
        <div
          data-testid="mobile-parent"
          className="bg-backdrop pb-2 pt-2 text-left "
        >
          <Link className="ml-7" to={`/${parent.slug}`}>
            {parent.name}
          </Link>
          <span className="font-thin"> > </span>
        </div>
      </div>
    </>
  );
}
