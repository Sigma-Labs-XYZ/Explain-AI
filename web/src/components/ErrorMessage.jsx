import React from "react";
import "../Styling/ErrorMessage/ErrorMessage.css";

function ErrorMessage({ message }) {
  return (
    <div className="error-container">
      <div data-testid="error-message" className="error-message">
        <h1>Error</h1>
        <h2>{message}</h2>
      </div>
    </div>
  );
}

export default ErrorMessage;
