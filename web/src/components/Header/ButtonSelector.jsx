import "./Header.scss";
import React, { useContext, useEffect } from "react";
import { ageContext } from "../AudienceContext";

export default function ButtonSelector() {
  const names = ["5", "10", "Adult"];
  const { age, setAge, updateLocalStorage } = useContext(ageContext);
  const handleButtonClick = (section) => {
    updateLocalStorage(section);
    setAge(section);
  };

  useEffect(() => {
    console.log("Age changed: ", age);
  }, [age]);

  return (
    <>
      {["5", "10", "20"].map((section, i) => (
        <button
          type="button"
          key={String(section)}
          onClick={() => handleButtonClick(section)}
          className={age === section ? "btn selected" : "btn"}
        >
          {names[i]}
        </button>
      ))}
    </>
  );
}
