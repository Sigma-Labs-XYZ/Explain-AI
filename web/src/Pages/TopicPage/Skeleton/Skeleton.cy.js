import React from "react";
import { BrowserRouter } from "react-router-dom";
import TopicPageLoading from "./TopicPageLoading";
import TopicPage from "../TopicPage";
import "../../../index.css";
import "../../../Styling/TopicCard/TopicCard.css";
import "../../../Styling/TopicBreadcrumbs/TopicBreadcrumbs.css";
import dimensions from "../../../Tests/dimensions";
import AudienceContext from "../../../components/AudienceContext";
import dummyData from "../TopicCard/dummy_data.json";

describe("<TopicPageLoading />", () => {
  it("renders", () => {
    cy.mount(
      <BrowserRouter>
        <TopicPageLoading />
      </BrowserRouter>,
    );
  });

  Object.values(dimensions).forEach((device) => {
    it(`Skeleton is present in viewport resolution ${device.viewportWidth} x ${device.viewportLength}`, () => {
      cy.mount(
        <BrowserRouter>
          <TopicPageLoading />
        </BrowserRouter>,
      );
      cy.viewport(device.viewportWidth, device.viewportLength);
      cy.get("[data-testid=skeleton]").should("be.visible");
    });
  });
});

describe("Testing skeleton appears before normal data", () => {
  it("Should display skeleton", () => {
    cy.intercept(
      {
        method: "GET", // Route all GET requests
      },
      { delay: 10000, body: dummyData },
    ).as("topicrequest");

    cy.mount(
      <BrowserRouter>
        <AudienceContext>
          <TopicPage />
        </AudienceContext>
      </BrowserRouter>,
    );
    cy.get("[data-testid=skeleton]").should("be.visible");

    // eslint-disable-next-line testing-library/await-async-utils
    cy.wait("@topicrequest");

    cy.get("[data-testid=loadedPage]").should("be.visible");
  });
});
