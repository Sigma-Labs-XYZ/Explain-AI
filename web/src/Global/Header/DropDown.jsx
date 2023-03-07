import "./Header.scss";
import React from "react";
import { sendAudienceLevelChangeEvent } from "../../utils/gaEvents";

export default function DropDown({ age, changeAge }) {
  return (
    <select
      onChange={(e) => {
        changeAge(e.target.value);
        sendAudienceLevelChangeEvent(e.target.value);
      }}
      className="select-pg"
      value={age}
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">Adult</option>
    </select>
  );
}
