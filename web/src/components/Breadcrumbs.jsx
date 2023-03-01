import { Link } from "react-router-dom";
import { React } from "react";

import "../Styles/BreadCrumbs.css";
export default function Breadcrumbs({ grandParent, parent }) {
  return (
    <>
      <nav data-testid="desktop" id="desktop" className="ml-7">
        <span className=" w-screen bg-backdrop text-white capitalize p-0.5">
          <Link to={`/${grandParent.slug}`}>{grandParent.name} </Link>
          <span data-testid="desktop-grandParent" className="font-thin">
            {"> "}
          </span>
          <Link to={`/${parent.slug}`}>{parent.name} </Link>
          <span data-testid="desktop-parent" className="font-thin">
            {"> "}
          </span>
        </span>
      </nav>

      <div id="mobile" data-testid="mobile">
        <Link data-testid="mobile-grandparent" to={`/${grandParent.slug}`}>
          <button className="bg-backdrop2 pb-2 pt-2 text-left text-white capitalize w-screen">
            <span className="ml-7">
              {" "}
              {grandParent.name}
              {"  > "}{" "}
            </span>
          </button>
        </Link>

        <Link data-testid="mobile-parent" to={`/${parent.slug}`}>
          <button className="bg-backdrop pb-2 pt-2 text-left text-white capitalize w-screen">
            <span className="ml-7">
              {" "}
              {parent.name}
              {"  > "}{" "}
            </span>
          </button>
        </Link>
      </div>
    </>
  );
}
