import React from "react";
import TopicCard from "./TopicCard";
import testData from "./dummy_data.json";

const dimensions = require("../../../Tests/dimensions");

const topic = { ...testData.topic[0] };

describe("Testing text alignment for each device dimension", () => {
  Object.values(dimensions).forEach((device) => {
    it("Text aligned for all types", () => {
      cy.mount(<TopicCard topic={topic} audience={10} />);
      cy.viewport(device.viewportWidth, device.viewportLength);
      cy.get(".topic-card-description").should("have.css", "text-align", "justify");
    });
  });
});

describe("<TopicCard /> on Desktop", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });
  it("has the right flex direction", () => {
    cy.mount(<TopicCard topic={topic} audience={10} />);
    cy.get(".topic-card-img-btn").should("have.css", "flex-direction", "row");
    cy.get(".topic-card-img-btn").should("have.css", "justify-content", "space-evenly");
    cy.get(".topic-card-img-btn").should("have.css", "translate", "0px 30%");
    cy.get(".topic-card").should("have.css", "width", "600px");
  });
});

describe("<TopicCard /> on Phone", () => {
  beforeEach(() => {
    cy.viewport(dimensions.iphoneXR.viewportWidth, dimensions.iphoneXR.viewportLength);
  });
  it("has the right flex direction", () => {
    cy.mount(<TopicCard topic={topic} audience={10} />);
    cy.get(".topic-card-img-btn").should("have.css", "flex-direction", "column");
    cy.get(".topic-card-img-btn").should("have.css", "justify-content", "center");
    cy.get(".topic-card-img-btn").should("have.css", "translate", "0px 30%");
  });
});