import React from "react";
import Header from "../../components/Header";

describe("<Header />", () => {
  beforeEach(() => {
    cy.viewport(600, 812);
  });

  it("renders", () => {
    cy.mount(<Header />);
    cy.get(".selectorButtons").should("be.visible");
    cy.get(".dropdown").should("not.be.visible");

    cy.viewport(550, 812);
    cy.get(".dropdown").should("be.visible");
    cy.get(".selectorButtons").should("not.be.visible");
  });
});
