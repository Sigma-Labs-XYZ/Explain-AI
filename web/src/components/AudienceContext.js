import React, { createContext, useState, useMemo } from "react";

export const ageContext = createContext(null);

export function AudienceContext({ children }) {
  const [age, setAge] = useState(
    localStorage.getItem("age") || localStorage.setItem("age", "5") || "5",
  );

  const updateLocalStorage = (newAge) => {
    localStorage.setItem("age", newAge);
  };

  // eslint-disable-next-line
  const value = {
    age,
    setAge,
    updateLocalStorage,
  };

  return <ageContext.Provider value={value}>{children}</ageContext.Provider>;
}
