import "./Header.scss";
import React from "react";

export default function ButtonSelector({ age, changeAge }) {
  const names = ["5", "10", "Adult"];
  return (
    <>
      {["5", "10", "20"].map((section) => (
        <button
          type="button"
          key={section}
          onClick={() => changeAge(section)}
          className={age === section ? "btn selected" : "btn"}
        >
          {section}
        </button>
      ))}
    </>
  );
}
