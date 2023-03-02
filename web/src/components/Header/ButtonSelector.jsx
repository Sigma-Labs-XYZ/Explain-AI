import "./Header.scss";
import React from "react";

export default function ButtonSelector({ age, changeAge }) {
  const names = ["5", "10", "Adult"];
  return (
    <>
      {["5", "10", "20"].map((section, i) => (
        <button
          type="button"
          key={String(section)}
          onClick={() => changeAge(section)}
          className={age === section ? "btn selected" : "btn"}
          // children={section}
        >
          {names[i]}
        </button>
      ))}
    </>
  );
}
