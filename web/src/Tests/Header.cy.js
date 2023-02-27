import Header from "../components/Header";
import React from "react";

describe("Media queries and their effects on Age Toggle and Dropdown", () => {
  //Checking Toggle Appears when screen above 400px
  it("Toggle appears when screen width above 400px", () => {
    cy.viewport(405, 1000);
    cy.mount(<Header />);
    cy.get("button").should("not.have.css", "display", "none");
  });

  it("Toggle disappears when screen width below 400px", () => {
    cy.viewport(395, 1000);
    cy.mount(<Header />);
    cy.get("button").should("have.css", "display", "none");
  });

  //Checking Dropdown appears when screen below 400px
  it("Dropdown appears when screen width below 400px", () => {
    cy.viewport(395, 1000);
    cy.mount(<Header />);
    cy.get("select").should("not.have.css", "display", "none");
  });

  //Checking Toggle disappears when screen below 400px
  it("Dropdown appears when screen width below 400px", () => {
    cy.viewport(405, 1000);
    cy.mount(<Header />);
    cy.get("select").should("have.css", "display", "none");
  });
});
