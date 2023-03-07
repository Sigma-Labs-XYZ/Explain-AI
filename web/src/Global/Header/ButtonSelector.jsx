import "./Header.scss";
import React from "react";
import { sendAudienceLevelChangeEvent } from "../../utils/gaEvents";

export default function ButtonSelector({ age, changeAge }) {
  const names = ["5", "10", "Adult"];
  return (
    <>
      {["5", "10", "20"].map(
        (
          section, // Section corresponds to age option
          i,
        ) => (
          <button
            type="button"
            key={String(section)}
            onClick={() => {
              sendAudienceLevelChangeEvent(section);
              changeAge(section);
            }}
            className={age === section ? "btn selected" : "btn"}
          >
            {names[i]}
          </button>
        ),
      )}
    </>
  );
}
