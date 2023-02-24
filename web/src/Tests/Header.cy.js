/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
import React from "react";
import Header from "../utils/Components/Header";

const dimensions = require("./dimensions.js");

describe("Each screen size", () => {
  Object.values(dimensions).map((device) => {
    it("Logo and 'Like I'm' rendered", () => {
      cy.mount(<Header />);
      cy.viewport(device.viewportWidth, device.viewportLength);
      cy.get("img").should("be.visible");
      cy.get('[data-testid="ageTitle"]').should("have.text", "Like I'm");
    });
  });
});

describe("Desktop", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it("right components rendered", () => {
    cy.mount(<Header />);
    cy.get("button").should("be.visible");
  });

  it("some components hidden", () => {
    cy.mount(<Header />);
    cy.get("select").should("not.be.visible");
  });
});

describe("Iphone XR", () => {
  beforeEach(() => {
    cy.viewport(414, 896);
  });

  it("right components rendered", () => {
    cy.mount(<Header />);
    cy.get("select").should("be.visible");
  });

  it("some components hidden", () => {
    cy.mount(<Header />);
    cy.get("button").should("not.be.visible");
  });
});
