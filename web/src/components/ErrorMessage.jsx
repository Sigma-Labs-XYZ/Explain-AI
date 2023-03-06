import React from "react";
import "../Styles/ErrorMessage/ErrorMessage.css";

export default function ErrorMessage({ message }) {
  return (
    <div className="error-container">
      <div data-testid="error-message" className="error-message">
        <h1>Error</h1>
        <h2>{message}</h2>
      </div>
    </div>
  );
}
