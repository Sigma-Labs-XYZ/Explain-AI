import { React, useState } from "react";
import classes from "../Styling/Header.module.scss";

export default function Header() {
  const [buttonAge, setButtonAge] = useState(
    parseInt(localStorage.getItem("age") || localStorage.setItem("age", 5) || 5)
  );

  const ages = {
    five: {
      name: "5",
      number: "5",
    },
    ten: {
      name: "10",
      number: "10",
    },
    adult: {
      name: "Adult",
      number: "20",
    },
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <img
          src="/logo.png"
          alt="ExplaiAI logo"
          className={classes.header__content__logo}
        />
        <div className={classes.header__content__ages}>
          <p data-testid="ageTitle">
            <nobr>Like I'm</nobr>
          </p>
          {Object.values(ages).map((age, i) => {
            return (
              <button
                key={i}
                name={age.number}
                data-testid={age.number}
                className={
                  buttonAge === age.number
                    ? classes.header__content__ages__selected
                    : classes.header__content__ages__unselected
                }
                onClick={(e) => {
                  localStorage.setItem("age", e.target.name);
                  setButtonAge(e.target.name);
                  console.log(e.target.name);
                }}
              >
                {age.name}
              </button>
            );
          })}
          <select
            value={buttonAge}
            className={classes.header__content__ages__option}
            onChange={(e) => {
              setButtonAge(e.target.value);
            }}
          >
            {Object.values(ages).map((age, i) => {
              return (
                <option value={age.text} key={i} name={age.number}>
                  {age.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </header>
  );
}
