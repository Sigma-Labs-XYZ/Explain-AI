import explainailogo from "../images/explainai-logo.png";
import "./Header.scss";
import { useState } from "react";

export default function Header() {
  const [age, setAge] = useState("");

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
            onClick={() => setAge("adult")}
            className={age === "adult" ? "btn selected" : "btn"}
          >
            Adult
          </button>
          <select
            onChange={(e) => setAge(e.target.value)}
            className={age === "adult" ? "select-adult" : "select-pg"}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="adult">Adult</option>
          </select>
        </div>
      </header>
    </div>
  );
}
