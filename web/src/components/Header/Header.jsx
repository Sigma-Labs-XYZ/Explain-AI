/* eslint-disable react/jsx-no-bind */
import React, { useContext } from "react";
import explainailogo from "../../images/explainai-logo.png";
import "./Header.scss";
import DropDown from "./DropDown";
import ButtonSelector from "./ButtonSelector";
import { ageContext } from "../AudienceContext";

export default function Header() {
  const labelText = "Like I'm";
  const { age } = useContext(ageContext);

  return (
    <div>
      <header>
        <img src={explainailogo} alt="logo" />
        <div>
          <p>{labelText}</p>
          <ButtonSelector />
          <DropDown />
        </div>
      </header>
    </div>
  );
}
