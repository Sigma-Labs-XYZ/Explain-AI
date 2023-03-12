/* eslint-disable react/jsx-no-bind */
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import DropDown from "./DropDown";
import ButtonSelector from "./ButtonSelector";

export default function Header() {
  const labelText = "Like I'm";

  return (
    <div>
      <header>
        <Link data-test-id="router-Link" to="/" title="Link to homepage">
          <img src="./explainai-logo.png" alt="Explain AI" />
        </Link>
        <div>
          <p className="likeIm">{labelText}</p>
          <ButtonSelector />
          <DropDown />
        </div>
      </header>
    </div>
  );
}
