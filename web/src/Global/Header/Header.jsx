/* eslint-disable react/jsx-no-bind */

import React from "react";
import "./Header.scss";
import DropDown from "./DropDown";
import ButtonSelector from "./ButtonSelector";

export default function Header() {
  const labelText = "Like I'm";

  return (
    <div>
      <header>
        <a href="/" title="Link to homepage">
          <img
            src="./explainai-logo.png"
            alt="Logo of explain-ai & link to take you back to the homepage"
          />
        </a>
        <div>
          <p>{labelText}</p>
          <ButtonSelector />
          <DropDown />
        </div>
      </header>
    </div>
  );
}
