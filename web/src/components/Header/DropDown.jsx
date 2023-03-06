import "./Header.scss";
import React, { useContext } from "react";
import { ageContext } from "../AudienceContext";

export default function DropDown() {
  const { age, setAge, updateLocalStorage } = useContext(ageContext);

  return (
    <select
      onChange={(e) => {
        updateLocalStorage(e.target.value);
        setAge(e.target.value);
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
