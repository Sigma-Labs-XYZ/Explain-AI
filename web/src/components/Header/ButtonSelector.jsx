import "./Header.scss";
import React from "react";

export default function ButtonSelector({ age, changeAge }) {
  return (
    <>
      <button
        onClick={() => changeAge("5")}
        className={age === "5" ? "btn selected" : "btn"}
      >
        5
      </button>
      <button
        onClick={() => changeAge("10")}
        className={age === "10" ? "btn selected" : "btn"}
      >
        10
      </button>
      <button
        onClick={() => changeAge("Adult")}
        className={age === "Adult" ? "btn selected" : "btn"}
      >
        Adult
      </button>
    </>
  );
}
