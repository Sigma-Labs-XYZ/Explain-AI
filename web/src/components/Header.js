import { React, useState, useEffect } from "react";
import classes from "../Styling/Header.module.scss";

export default function Header() {
  const [buttonAge, setButtonAge] = useState();

  useEffect(() => {
    const storedAge = localStorage.getItem("age");
    if (storedAge) {
      setButtonAge(parseInt(localStorage.getItem("age")));
    } else {
      //defaults to 5
      localStorage.setItem("age", 5);
      setButtonAge(5);
    }
  }, [buttonAge]);

  const ages = {
    five: {
      name: "5",
      number: 5,
    },
    ten: {
      name: "10",
      number: 10,
    },
    adult: {
      name: "Adult",
      number: 20,
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
              localStorage.setItem("age", e.target.value);
              setButtonAge(e.target.value);
            }}
          >
            {Object.values(ages).map((age, i) => {
              return (
                <option value={age.number} key={i} name={age.number}>
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
