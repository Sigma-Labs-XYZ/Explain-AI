/* eslint-disable react/button-has-type */
import { Link } from "react-router-dom";
import { React, useEffect, useState } from "react";
import PropType from "prop-types";
import "../../../Styling/TopicBreadcrumbs/TopicBreadcrumbs.css";
import { sendBreadCrumbEvent } from "../../../utils/gaEvents";

function Breadcrumbs({ grandParent, parent, current }) {
  const [dad, setDad] = useState(parent);
  const [grandad, setGrandad] = useState(grandParent);
  useEffect(() => {
    if (!parent) {
      setDad({
        name: "",
        slug: current,
      });
      setGrandad({
        name: "",
        slug: current,
      });
    } else if (!grandParent) {
      setGrandad({
        name: "",
        slug: current,
      });
    }
  }, []);

  return (
    <div className="bg-backdrop h-[65px]">
      {grandad && dad ? (
        <nav data-testid="desktop" id="desktop" className="desktop">
          <span className="desktop-container">
            <Link
              onClick={() => {
                sendBreadCrumbEvent(current, grandad.name);
              }}
              to={`/${grandad.slug}`}
            >
              {grandad.name}
            </Link>
            <span data-testid="desktop-grandParent" className="font-thin">
              {" > "}
            </span>

            <Link
              onClick={() => {
                sendBreadCrumbEvent(current, dad.name);
              }}
              to={`/${dad?.slug}`}
            >
              {dad.name}
            </Link>
            <span data-testid="desktop-parent" className="font-thin">
              {" > "}
            </span>
          </span>
        </nav>
      ) : null}

      {grandad && dad ? (
        <div id="mobile" data-testid="mobile">
          <Link
            onClick={() => {
              sendBreadCrumbEvent(current, grandad.name);
            }}
            data-testid="mobile-grandParent"
            to={`/${grandad.slug}`}
          >
            <button className="mobile-parent-btn">
              <span className="ml-7">
                {" "}
                {grandad.name}
                {"  > "}{" "}
              </span>
            </button>
          </Link>

          <Link
            onClick={() => {
              sendBreadCrumbEvent(current, dad.name);
            }}
            data-testid="mobile-parent"
            to={`/${dad.slug}`}
          >
            <button className="mobile-grandParent-btn">
              <span className="ml-7">
                {" "}
                {dad.name}
                {"  > "}{" "}
              </span>
            </button>
          </Link>
        </div>
      ) : null}
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
