import React from "react";
import "../Styling/ErrorMessage/ErrorMessage.css";
import PropTypes from "prop-types";

function ErrorMessage({ message }) {
  return (
    <div className="error-container">
      <div data-testid="error-message" className="error-message">
        <h3>Error</h3>
        <h4>{message}</h4>
      </div>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;

export const replaceImage = (error) => {
  // eslint-disable-next-line no-param-reassign
  error.target.src = "/no-image.jpeg";
};
