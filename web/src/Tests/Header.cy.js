import Header from "../components/Header";
import React from "react";

it("Header displays Age Toggle if screen size above 400px", () => {
  //   cy.viewport("iphone-5");
  cy.viewport("macbook-15");

  cy.mount(<Header />);
  cy.get("button").should("not.have.css", "display", "none");
});
