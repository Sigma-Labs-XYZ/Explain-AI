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
        <img className="logo" src={logo} alt="Explain AI"></img>
        <div className="selector">
          <p className="textStyle"> Like I'm </p>
          <button
            data-testid="five"
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
            data-testid="ten"
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
            data-testid="adult"
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
          <div className="dropdown">
            <form action="/action_page.php">
              <select name="explainLevels" id="explainLevels">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="Adult">Adult</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
