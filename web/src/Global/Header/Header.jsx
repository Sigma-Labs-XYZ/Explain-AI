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
        <img src="./explainai-logo.png" alt="logo" />
        <div>
          <p>{labelText}</p>
          <ButtonSelector />
          <DropDown />
        </div>
      </header>
    </div>
  );
}
