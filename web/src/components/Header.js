import { useEffect, useState } from "react";
import styles from "../Styles/styles.css";
import logo from "../logo.png";

//change audience to selectedAudience
export default function Header() {
  const [audience, setAudience] = useState("5");

  function select(name) {
    setAudience(name);
    // console.log(audience);
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
          <div data-test-id="selectorButtons" className="selectorButtons">
            <button
              data-testid="five"
              className={audience === "5" ? "selected" : "unselected"}
              name="5"
              onClick={(event) => {
                select(event.target.name);
              }}
            >
              5
            </button>
            <button
              data-testid="ten"
              className={audience === "10" ? "selected" : "unselected"}
              name="10"
              onClick={(event) => {
                select(event.target.name);
              }}
            >
              10
            </button>
            <button
              data-testid="adult"
              className={audience === "Adult" ? "selected" : "unselected"}
              name="Adult"
              onClick={(event) => {
                select(event.target.name);
              }}
            >
              Adult
            </button>
          </div>
          <div data-test-id="dropdown" className="dropdown">
            <form action="/action_page.php">
              <select
                value={audience}
                name="explainLevels"
                id="explainLevels"
                onChange={(event) => {
                  console.log(event.target.value);
                  select(event.target.value);
                }}
              >
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
