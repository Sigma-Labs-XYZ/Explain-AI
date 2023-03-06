import React, { createContext, useState } from "react";

export const ageContext = createContext(null);

export function AudienceContext({ children }) {
  const [audience, setAudience] = useState(
    localStorage.getItem("age") || localStorage.setItem("age", "5") || "5",
  );

  const updateLocalStorage = (newAge) => {
    localStorage.setItem("age", newAge);
  };

  // eslint-disable-next-line
  const value = {
    audience,
    setAudience,
    updateLocalStorage,
  };

  return <ageContext.Provider value={value}>{children}</ageContext.Provider>;
}
