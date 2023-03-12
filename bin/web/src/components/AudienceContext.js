import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
/* eslint react/forbid-prop-types: 0 */
export const ageContext = createContext(null);

function AudienceContext({ children }) {
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

AudienceContext.propTypes = {
  children: PropTypes.shape({
    $$typeof: PropTypes.symbol,
  }).isRequired,
};

export default AudienceContext;
