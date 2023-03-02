import "./Header.scss";
import React from "react";

export default function ButtonSelector({ age, changeAge }) {
  return (
    <>
      {["5", "10", "Adult"].map((section) => (
        <button
          type="button"
          key={String(section)}
          onClick={() => changeAge(section)}
          className={age === section ? "btn selected" : "btn"}
          children={section}
        ></button>
      ))}
    </>
  );
}
