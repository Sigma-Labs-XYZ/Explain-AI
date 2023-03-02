import explainailogo from "../../images/explainai-logo.png";
import "./Header.scss";
import DropDown from "./DropDown";
import ButtonSelector from "./ButtonSelector";

import { useState, useEffect } from "react";

export default function Header() {
  const [age, setAge] = useState(
    localStorage.getItem("age") || localStorage.setItem("age", "5") || "5"
  );

  useEffect(() => {
    localStorage.setItem("age", age);
  }, [age]);

  function changeAge(age) {
    setAge(age);
  }
  return (
    <div>
      <header>
        <img src={explainailogo} alt="logo" />
        <div>
          <p>Like I'm</p>
          <ButtonSelector age={age} changeAge={changeAge} />
          <DropDown age={age} changeAge={changeAge} />
        </div>
      </header>
    </div>
  );
}
