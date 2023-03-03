import React from "react";
import RelationCard from "../components/RelationCard";

describe("media queries for the card display for phone/desktop", () => {
  it("there are margins for desktop screen size", () => {
    cy.viewport(500, 1000);
    cy.mount(<RelationCard name="test" description="test" />);
    cy.get('[data-test-id="card container"]').should("have.css", "margin-left", "20px");
  });

  it("there are no margins for phone", () => {
    cy.viewport(400, 1000);
    cy.mount(<RelationCard name="test" description="test" />);
    cy.get('[data-test-id="card container"]').should("not.have.css", "margin-left", "20px");
  });

  it("image should be centred on the card container edge for desktop", () => {
    cy.viewport(500, 1000);
    cy.mount(<RelationCard name="test" description="test" />);
    cy.get('[data-test-id="img container"]').should("have.css", "margin-left", "-48px");
    cy.get("img").should("have.css", "width", "96px");
  });
});
