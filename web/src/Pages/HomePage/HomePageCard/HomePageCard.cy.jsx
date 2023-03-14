import React from "react";
import "../../../index.css";
import "../../../Styling/Homepage/Homepage.css";
import { BrowserRouter } from "react-router-dom";
import HomePageCard from "./HomePageCard";
import testData from "../HomePageDummyData.json";
import AudienceContext from "../../../components/AudienceContext";

describe("checking margins for HomePageCard at each screen<HomePageCard />", () => {
  it("checking margins for a desktop screen", () => {
    cy.viewport(900, 1000);

    cy.mount(
      <AudienceContext>
        <BrowserRouter>
          <HomePageCard group={testData.group[0]} audience={5} />
        </BrowserRouter>
      </AudienceContext>,
    );
    cy.get(".group-display-title").should("be.visible");
    cy.get(".group-display-title").should("have.css", "margin", "112px 135px 0px 20px");
  });

  it("checking margins for a super wide desktop screen", () => {
    cy.viewport(1200, 1000);

    cy.mount(
      <AudienceContext>
        <BrowserRouter>
          <HomePageCard group={testData.group[0]} audience={5} />
        </BrowserRouter>
      </AudienceContext>,
    );
    cy.get(".group-display-title").should("be.visible");
    cy.get(".group-display-title").should("have.css", "margin", "112px 180px 0px");
  });

  it("checking margins for a phone screen", () => {
    cy.viewport(300, 600);

    cy.mount(
      <AudienceContext>
        <BrowserRouter>
          <HomePageCard group={testData.group[0]} audience={5} />
        </BrowserRouter>
      </AudienceContext>,
    );
    cy.get(".group-display-title").should("be.visible");
    cy.get(".group-display-title").should("have.css", "margin", "112px 0px 0px");
  });
});
