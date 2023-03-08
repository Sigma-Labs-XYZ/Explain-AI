import "./Header.scss";
import React, { useContext } from "react";
import { sendAudienceLevelChangeEvent } from "../../utils/gaEvents";
import { ageContext } from "../../components/AudienceContext";

const audiences = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 20, label: "Adult" },
];

function ButtonSelector() {
  const { audience, setAudience } = useContext(ageContext);
  return (
    <>
      {audiences.map((a) => (
        <button
          type="button"
          key={a.label}
          onClick={() => {
            sendAudienceLevelChangeEvent(a.value);
            setAudience(a.value);
          }}
          className={audience === a.value ? "btn selected" : "btn"}
        >
          {a.label}
        </button>
      ))}
    </>
  );
}

export default ButtonSelector;
