import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import AudienceContext from "../../../components/AudienceContext";
import "../../../index.css";
import data from "../HomePageDummyData.json";

describe("Test to check spacing and colors on groups <HomePage />", () => {
  const { group } = data;
  beforeEach(() => {
    cy.intercept("GET", "https://explainai-api.onrender.com/groups", {
      statusCode: 200,
      body: {
        group,
      },
    }).as("fetchGroups");
  });

  it("Test to check the text color and margins for group containers", () => {
    cy.mount(
      <AudienceContext>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </AudienceContext>,
    );

    cy.wait("@fetchGroups"); //eslint-disable-line
    cy.contains("Science");

    cy.get(".group-title").should("have.css", "color", "rgb(255, 255, 255)");
    cy.get(".group-title").should("be.visible");
    cy.get(".group-description").should("have.css", "color", "rgb(131, 131, 131)");
    cy.get(".group-description").should("be.visible");
    cy.get(".groups-container").should("have.css", "margin-top", "50px");
    cy.get(".homepage-container").should("have.css", "margin", "100px 0px 0px");
  });
});
