import React, { createContext, useState, useEffect } from "react";

export const ageContext = createContext(null);

export function AudienceContext({ children }) {
  const DEFAULT_AUDIENCE = 5;
  const savedAudience = Number(localStorage.getItem("age"));
  const [audience, setAudience] = useState(savedAudience || DEFAULT_AUDIENCE);

  useEffect(() => {
    localStorage.setItem("age", audience);
  }, [audience]);

  // eslint-disable-next-line
  const value = {
    audience,
    setAudience,
  };
  return <ageContext.Provider value={value}>{children}</ageContext.Provider>;
}
