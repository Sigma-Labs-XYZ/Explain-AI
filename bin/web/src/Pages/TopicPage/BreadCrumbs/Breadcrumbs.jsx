/* eslint-disable react/button-has-type */
import { Link } from "react-router-dom";
import { React } from "react";
import PropType from "prop-types";
import "../../../Styling/TopicBreadcrumbs/TopicBreadcrumbs.css";
import { sendBreadCrumbEvent } from "../../../utils/gaEvents";

function Breadcrumbs({ grandParent, parent, current }) {
  return (
    <div className="bg-backdrop h-[65px]">
      <nav data-testid="desktop" id="desktop" className="desktop">
        <span className="desktop-container">
          <Link
            onClick={() => {
              sendBreadCrumbEvent(current, grandParent.name);
            }}
            to={`/${grandParent.slug}`}
          >
            {grandParent.name}
          </Link>
          <span data-testid="desktop-grandParent" className="font-thin">
            {" > "}
          </span>
          <Link
            onClick={() => {
              sendBreadCrumbEvent(current, parent.name);
            }}
            to={`/${parent.slug}`}
          >
            {parent.name}
          </Link>
          <span data-testid="desktop-parent" className="font-thin">
            {" > "}
          </span>
        </span>
      </nav>

      <div id="mobile" data-testid="mobile">
        <Link
          onClick={() => {
            sendBreadCrumbEvent(current, grandParent.name);
          }}
          data-testid="mobile-grandParent"
          to={`/${grandParent.slug}`}
        >
          <button className="mobile-parent-btn">
            <span className="ml-7">
              {" "}
              {grandParent.name}
              {"  > "}{" "}
            </span>
          </button>
        </Link>

        <Link
          onClick={() => {
            sendBreadCrumbEvent(current, parent.name);
          }}
          data-testid="mobile-parent"
          to={`/${parent.slug}`}
        >
          <button className="mobile-grandParent-btn">
            <span className="ml-7">
              {" "}
              {parent.name}
              {"  > "}{" "}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

Breadcrumbs.propTypes = {
  grandParent: PropType.shape({
    name: PropType.string.isRequired,
    slug: PropType.string.isRequired,
  }).isRequired,
  parent: PropType.shape({
    grandParent: PropType.objectOf(PropType.string),
    name: PropType.string.isRequired,
    slug: PropType.string.isRequired,
  }).isRequired,
};

export default Breadcrumbs;
