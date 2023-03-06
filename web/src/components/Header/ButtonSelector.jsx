import "./Header.scss";
import React, { useContext, useEffect } from "react";
import { ageContext } from "../AudienceContext";

export default function ButtonSelector() {
  const names = ["5", "10", "Adult"];
  const { age, setAge, updateLocalStorage } = useContext(ageContext);

  return (
    <>
      {["5", "10", "20"].map((section, i) => (
        <button
          type="button"
          key={String(section)}
          onClick={() => {
            updateLocalStorage(section);
            setAge(section);
          }}
          className={age === section ? "btn selected" : "btn"}
        >
          {names[i]}
        </button>
      ))}
    </>
  );
}
