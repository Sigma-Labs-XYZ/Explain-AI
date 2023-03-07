/* eslint-disable react/jsx-no-bind */
import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import DropDown from "./DropDown";
import ButtonSelector from "./ButtonSelector";

export default function Header() {
  const labelText = "Like I'm";

  return (
    <div>
      <header>
        <Link to="/" title="Link to homepage">
          <img src="./explainai-logo.png" alt="Explain AI" />
        </Link>
        <div>
          <p>{labelText}</p>
          <ButtonSelector />
          <DropDown />
        </div>
      </header>
    </div>
  );
}
