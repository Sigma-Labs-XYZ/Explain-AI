import React from "react";
import { BrowserRouter } from "react-router-dom";
import TopicPageLoading from "./TopicPageLoading";
import TopicPage from "../TopicPage";
import "../../../index.css";
import "../../../Styling/TopicCard/TopicCard.css";
import "../../../Styling/TopicBreadcrumbs/TopicBreadcrumbs.css";
import dimensions from "../../../Tests/dimensions";
import { checkPropTypes } from "prop-types";
import TestingData from "./TestingData.json";
import fetchData from "../../../utils/networking";

const topic = { ...TestingData.topic[0] };
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

describe("Testing skeleton on Topic Page", () => {
  it("Should display skeleton", () => {
    cy.stub(window, "fetchData").returns(new Promise(() => {}));
    cy.mount(<TopicPage />);
    cy.get("[data-testid=skeleton]").should("be.visible");
  });
});
