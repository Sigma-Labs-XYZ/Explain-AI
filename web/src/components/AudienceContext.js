import React, { createContext, useState, useEffect } from "react";

export const ageContext = createContext(null);

export function AudienceContext({ children }) {
  const DEFAULT_AUDIENCE = 5;
  const [audience, setAudience] = useState(DEFAULT_AUDIENCE);

  const updateLocalStorage = (newAge) => {
    localStorage.setItem("age", newAge);
  };
  // when page loads, check local-storage for saved state
  useEffect(() => {
    const storedAudience = localStorage.getItem("age");
    if (!storedAudience) updateLocalStorage(DEFAULT_AUDIENCE);
    else setAudience(storedAudience);
  }, []);

  // eslint-disable-next-line
  const value = {
    audience,
    setAudience,
    updateLocalStorage,
  };

  return <ageContext.Provider value={value}>{children}</ageContext.Provider>;
}
