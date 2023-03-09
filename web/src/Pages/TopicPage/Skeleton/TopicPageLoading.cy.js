import React from "react";
import { BrowserRouter } from "react-router-dom";
import TopicPageLoading from "./TopicPageLoading";
import "../../../index.css";
import "../../../Styling/TopicCard/TopicCard.css";
import "../../../Styling/TopicBreadcrumbs/TopicBreadcrumbs.css";
import dimensions from "../../../Tests/dimensions";

describe("<TopicPageLoading />", () => {
  it("renders", () => {
    cy.mount(
      <BrowserRouter>
        <TopicPageLoading />
      </BrowserRouter>,
    );
  });

  Object.values(dimensions).map((device) => {
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

  it("Skeleton is available when isLoading is true", () => {
    cy.mount(
      <BrowserRouter>
        <TopicPageLoading />
      </BrowserRouter>,
    );
  });
});

// describe("Desktop viewport", () => {
//   beforeEach(() => {
//     cy.viewport(1280, 720);
//   });

//   it("Will have the right desktop styling", () => {
//     cy.mount(
//       <BrowserRouter>
//         <TopicPageLoading />
//       </BrowserRouter>,
//     );
//     cy.get();
//   });
// });

// describe("iPhone viewport", () => {
//   beforeEach(() => {
//     cy.viewport(373, 617);
//   });

//   it("", () => {
//     cy.mount(
//       <BrowserRouter>
//         <TopicPageLoading />
//       </BrowserRouter>,
//     );
//   });
// });

// describe("Topic Page Test", () => {
//   it("Will change to loading page before changing to normal page", () => {});
// });
