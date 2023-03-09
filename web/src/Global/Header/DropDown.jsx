import "./Header.scss";
import React, { useContext } from "react";
import { ageContext } from "../../components/AudienceContext";
import { sendAudienceLevelChangeEvent } from "../../utils/gaEvents";

export default function DropDown() {
  const { audience, setAudience } = useContext(ageContext);

  return (
    <select
      onChange={(e) => {
        setAudience(Number(e.target.value));
        sendAudienceLevelChangeEvent(Number(e.target.value));
      }}
      className="select-pg"
      value={audience}
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">Adult</option>
    </select>
  );
}
