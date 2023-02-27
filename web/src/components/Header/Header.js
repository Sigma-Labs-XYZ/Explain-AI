import { useEffect, useState } from "react";
import "../../Styles/header.css";
import logo from "../../logo.png";
import SelectorButtons from "./SelectorButtons";
import DropDownSelector from "./Dropdown";

export default function Header() {
  const [audience, setAudience] = useState("5");

  function select(name) {
    setAudience(name);
    localStorage.setItem("selectedExplanation", name);
  }

  useEffect(() => {
    const current = localStorage.getItem("selectedExplanation");
    if (current) {
      setAudience(current);
    }
  }, []);
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="Explain AI"></img>
        <div className="selector">
          <p className="textStyle"> Like I'm </p>
          <SelectorButtons audience={audience} select={select} />
          <DropDownSelector audience={audience} select={select} />
        </div>
      </div>
    </>
  );
}
