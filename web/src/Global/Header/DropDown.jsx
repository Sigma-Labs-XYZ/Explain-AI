import "./Header.scss";
import React, { useContext } from "react";
import { ageContext } from "../AudienceContext";

export default function DropDown() {
  const { audience, setAudience } = useContext(ageContext);

  return (
    <select
      onChange={(e) => {
        setAudience(e.target.value);
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
