import { useEffect, useState } from "react";
import styles from "../Styles/styles.css";
import logo from "../logo.png";
export default function Header() {
  const [selectedExplanation, setSelectedExplanation] = useState("fiveStyle");

  function select(name) {
    setSelectedExplanation(name);
    localStorage.setItem("selectedExplanation", name);
  }

  useEffect(() => {
    const current = localStorage.getItem("selectedExplanation");
    if (current) {
      setSelectedExplanation(current);
    }
  }, []);
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="Logo not available"></img>

        <div className="selector">
          <p className="textStyle"> Like I'm </p>

          <button
            id="five"
            className={
              selectedExplanation === "fiveStyle" ? "selected" : "unselected"
            }
            name="fiveStyle"
            onClick={(event) => {
              select(event.target.name);
              console.log(event.target.name);
            }}
          >
            5
          </button>
          <button
            id="ten"
            className={
              selectedExplanation === "tenStyle" ? "selected" : "unselected"
            }
            name="tenStyle"
            onClick={(event) => {
              select(event.target.name);
              console.log(event.target.name);
            }}
          >
            10
          </button>
          <button
            id="adult"
            className={
              selectedExplanation === "adultStyle" ? "selected" : "unselected"
            }
            name="adultStyle"
            onClick={(event) => {
              select(event.target.name);
              console.log(event.target.name);
            }}
          >
            Adult
          </button>
        </div>
      </div>
    </>
  );
}
