import "./Header.scss";
import React, { useContext } from "react";
import { ageContext } from "../AudienceContext";

export default function ButtonSelector() {
  const names = ["5", "10", "Adult"];
  const { audience, setAudience } = useContext(ageContext);

  return (
    <>
      {["5", "10", "20"].map((section, i) => (
        <button
          type="button"
          key={String(section)}
          onClick={() => {
            setAudience(section);
          }}
          className={audience === section ? "btn selected" : "btn"}
        >
          {names[i]}
        </button>
      ))}
    </>
  );
}
