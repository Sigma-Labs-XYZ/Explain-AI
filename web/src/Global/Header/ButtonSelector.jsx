import "./Header.scss";
import React, { useContext } from "react";
import { ageContext } from "../AudienceContext";

const audiences = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 20, label: "Adult" },
];

export default function ButtonSelector() {
  const { audience, setAudience } = useContext(ageContext);
  return (
    <>
      {audiences.map((a) => (
        <button
          type="button"
          key={audience.label}
          onClick={() => setAudience(audience.value)}
          className={audience === a.value ? "btn selected" : "btn"}
        >
          {a.label}
        </button>
      ))}
    </>
  );
}
