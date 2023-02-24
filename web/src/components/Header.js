import explainailogo from "../images/explainai-logo.png";
import "./Header.scss";
import { useState, useEffect } from "react";

export default function Header() {
  const [age, setAge] = useState(localStorage.getItem("age"));

  useEffect(() => {
    localStorage.setItem("age", age);
  }, [age]);

  return (
    <div>
      <header>
        <img src={explainailogo} alt="logo" />
        <div>
          <p>Like I'm</p>
          <button
            onClick={() => setAge("5")}
            className={age === "5" ? "btn selected" : "btn"}
          >
            5
          </button>
          <button
            onClick={() => setAge("10")}
            className={age === "10" ? "btn selected" : "btn"}
          >
            10
          </button>
          <button
            onClick={() => setAge("Adult")}
            className={age === "Adult" ? "btn selected" : "btn"}
          >
            Adult
          </button>
          <select
            onChange={(e) => setAge(e.target.value)}
            className={age === "Adult" ? "select-adult" : "select-pg"}
            value={age}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="Adult">Adult</option>
          </select>
        </div>
      </header>
    </div>
  );
}
