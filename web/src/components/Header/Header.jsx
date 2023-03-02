/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from "react";
import explainailogo from "../../images/explainai-logo.png";
import "./Header.scss";
import DropDown from "./DropDown";
import ButtonSelector from "./ButtonSelector";

export default function Header() {
  const [age, setAge] = useState(
    localStorage.getItem("age") || localStorage.setItem("age", "5") || "5",
  );

  const labelText = "Like I'm";

  useEffect(() => {
    localStorage.setItem("age", age);
  }, [age]);

  function changeAge(newAge) {
    setAge(newAge);
  }
  return (
    <div>
      <header>
        <img src={explainailogo} alt="logo" />
        <div>
          <p>{labelText}</p>
          <ButtonSelector age={age} changeAge={changeAge} />
          <DropDown age={age} changeAge={changeAge} />
        </div>
      </header>
    </div>
  );
}
