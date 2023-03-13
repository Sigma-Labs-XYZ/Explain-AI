import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import AudienceContext from "../../../components/AudienceContext";
import "../../../index.css";
import data from "../HomePageDummyData.json";

describe("Test to check spacing and colors on groups <HomePage />", () => {
  Cypress.on("uncaught:exception", (err, runnable) => false);

  const { group } = data;
  beforeEach(() => {
    cy.intercept("/dummy").as("dummy");
    cy.intercept("GET", "https://explainai-api.onrender.com/groups", { group }).as("fetchgroups");
  });
  it("Test to check the text color and margins for group containers", () => {
    cy.mount(
      <AudienceContext>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </AudienceContext>,
    );
    cy.get(".group-title", { timeout: 10000 }).should("have.css", "color", "rgb(255, 255, 255)");
    cy.get(".group-description").should("have.css", "color", "rgb(131, 131, 131)");
    cy.get(".groups-container").should("have.css", "margin-top", "50px");
    cy.get(".homepage-container").should("have.css", "margin", "100px 0px 0px");
  });
});
