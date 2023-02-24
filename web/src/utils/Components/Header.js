import { React, useState, useEffect } from "react";
import classes from "../../Styling/Header.module.scss";

export default function Header() {
  const [buttonAge, setButtonAge] = useState("5");

  const selectAge = (age) => {
    setButtonAge(age);
    localStorage.setItem("selected age", age);
  };

  useEffect(() => {
    const currentAge = localStorage.getItem("selected age");

    if (currentAge) {
      setButtonAge(currentAge);
    }
  }, []);

  const ages = {
    five: {
      text: "five",
      number: "5",
    },
    ten: {
      text: "ten",
      number: "10",
    },
    adult: {
      text: "adult",
      number: "Adult",
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
          <p>
            <nobr>Like I'm</nobr>
          </p>
          {Object.values(ages).map((age, i) => {
            return (
              <button
                key={i}
                data-testid={age.text}
                className={
                  buttonAge === age.number
                    ? classes.header__content__ages__selected
                    : classes.header__content__ages__unselected
                }
                name={age.number}
                onClick={(e) => {
                  selectAge(e.target.name);
                }}
              >
                {age.number}
              </button>
            );
          })}
          <select
            name="age"
            value={buttonAge}
            className={classes.header__content__ages__option}
            onChange={(e) => {
              selectAge(e.target.value);
            }}
          >
            {Object.values(ages).map((age, i) => {
              return (
                <option value={age.text} key={i}>
                  {age.number}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </header>
  );
}
