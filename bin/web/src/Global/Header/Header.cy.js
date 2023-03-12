import React from "react";
import { BrowserRouter } from "react-router-dom";
import AudienceContext from "../../components/AudienceContext";
import Header from "./Header";

describe("Media queries and their effects on Age Toggle and Dropdown", () => {
  it("Toggle appears when screen width above 400px (Desktop)", () => {
    cy.viewport(555, 1000);
    cy.mount(
      <AudienceContext>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AudienceContext>,
    );
    cy.get("button").should("not.have.css", "display", "none");
  });

  it("Toggle disappears when screen width below 400px (Mobile)", () => {
    cy.viewport(400, 1000);
    cy.mount(
      <AudienceContext>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AudienceContext>,
    );
    cy.get("button").should("have.css", "display", "none");
  });

  it("Dropdown appears when screen width below 550px (Desktop)", () => {
    cy.viewport(395, 1000);
    cy.mount(
      <AudienceContext>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AudienceContext>,
    );
    cy.get("select").should("not.have.css", "display", "none");
  });

  it("Dropdown disappears when screen width above 550px (Mobile)", () => {
    cy.viewport(555, 1000);
    cy.mount(
      <AudienceContext>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AudienceContext>,
    );
    cy.get("select").should("have.css", "display", "none");
  });

  it("15% Margin appears on both sides of Elements when screen width above 1000px (Super-wide Desktop)", () => {
    cy.viewport(1200, 1000);
    cy.mount(
      <AudienceContext>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AudienceContext>,
    );
    cy.get('[data-test-id="router-Link"]').should("have.css", "margin-left", "180px");
  });
});

it("Selecting Adult in dropdown reduces font size to 18px", () => {
  cy.viewport(395, 1000);
  cy.mount(
    <AudienceContext>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </AudienceContext>,
  );
  cy.get("select").invoke("val", "Adult").trigger("change");
  cy.get("select").should("have.css", "font-size", "18px");
});

it("Background color changes when a button is clicked", () => {
  cy.viewport(555, 1000);
  cy.mount(
    <AudienceContext>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </AudienceContext>,
  );
  cy.get("button")
    .contains("10")
    .should("have.css", "background-color", "rgb(50, 50, 50)")
    .trigger("click")
    .should("have.css", "background-color", "rgb(255, 255, 255)");
});
