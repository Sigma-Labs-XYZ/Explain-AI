import React from "react";
import "../Styling/ErrorMessage/ErrorMessage.css";

export default function ErrorMessage({ message }) {
  return (
    <div className="error-container">
      <div data-testid="error-message" className="error-message">
        <h3>Error</h3>
        <h4>{message}</h4>
      </div>
    </div>
  );
}
