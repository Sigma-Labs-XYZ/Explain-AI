import Header from "../components/Header";
import React from "react";

describe("Media queries and their effects on Age Toggle and Dropdown", () => {
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

  it("Dropdown appears when screen width below 400px", () => {
    cy.viewport(395, 1000);
    cy.mount(<Header />);
    cy.get("select").should("not.have.css", "display", "none");
  });

  it("Dropdown disappears when screen width above 400px", () => {
    cy.viewport(405, 1000);
    cy.mount(<Header />);
    cy.get("select").should("have.css", "display", "none");
  });
});

it("Selecting Adult in dropdown reduces font size to 10px", () => {
  cy.viewport(395, 1000);
  cy.mount(<Header />);
  cy.get("select").invoke("val", "Adult").trigger("change");
  cy.get("select").should("have.css", "font-size", "10px");
});
