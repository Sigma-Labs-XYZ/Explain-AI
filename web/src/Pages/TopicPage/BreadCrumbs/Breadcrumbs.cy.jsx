import React from "react";
import { BrowserRouter } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import "../../../App";

describe("<Breadcrumbs /> - testing for component render and display on screen adjust", () => {
  it("desktop breadcrumb component renders on screen on desktop view", () => {
    cy.viewport(1200, 1000);
    cy.mount(
      <BrowserRouter>
        <Breadcrumbs
          parent={{ name: "computing", slug: "computing" }}
          grandParent={{ name: "maths", slug: "maths" }}
        />
      </BrowserRouter>,
    );
    cy.get("[data-testid=desktop]").should("have.css", "display", "block");
    cy.get("[data-testid=desktop-parent]").should("be.visible");
    cy.get("[data-testid=desktop-grandParent]").should("be.visible");
  });

  it("mobile breadcrumb component doesn't render on screen on desktop view", () => {
    cy.viewport(1200, 1000);
    cy.mount(
      <BrowserRouter>
        <Breadcrumbs
          parent={{ name: "computing", slug: "computing" }}
          grandParent={{ name: "maths", slug: "maths" }}
        />
      </BrowserRouter>,
    );

    cy.get("[data-testid=mobile]").should("have.css", "display", "none");
    cy.get("[data-testid=mobile-parent]").should("not.be.visible");
    cy.get("[data-testid=mobile-grandParent]").should("not.be.visible");
  });

  it("check text color and background for desktop breadcrumb", () => {
    cy.viewport(500, 600);
    cy.mount(
      <BrowserRouter>
        <Breadcrumbs
          parent={{ name: "computing", slug: "computing" }}
          grandParent={{ name: "maths", slug: "maths" }}
        />
      </BrowserRouter>,
    );
    console.log(cy.get("[data-testid=desktop]").find("span").first());
    cy.get("[data-testid=desktop]")
      .find("span")
      .first()
      .should("have.css", "color", "rgb(255, 255, 255)");
    cy.get("[data-testid=desktop]")
      .find("span")
      .first()
      .should("have.css", "background-color", "rgb(78, 77, 77)");
  });

  it("mobile component renders on screen on mobile view", () => {
    cy.viewport(300, 600);
    cy.mount(
      <BrowserRouter>
        <Breadcrumbs
          parent={{ name: "computing", slug: "computing" }}
          grandParent={{ name: "maths", slug: "maths" }}
        />
      </BrowserRouter>,
    );
    cy.get("[data-testid=mobile]").should("have.css", "display", "block");
    cy.get("[data-testid=mobile-parent]").should("be.visible");
    cy.get("[data-testid=mobile-grandParent]").should("be.visible");
  });

  it("desktop component does not render on screen on mobile view", () => {
    cy.viewport(300, 600);
    cy.mount(
      <BrowserRouter>
        <Breadcrumbs
          parent={{ name: "computing", slug: "computing" }}
          grandParent={{ name: "maths", slug: "maths" }}
        />
      </BrowserRouter>,
    );
    cy.get("[data-testid=desktop]").should("have.css", "display", "none");
    cy.get("[data-testid=desktop-parent]").should("not.be.visible");
    cy.get("[data-testid=desktop-grandParent]").should("not.be.visible");
  });

  it("check background change on mobile version for the second breadcrumb", () => {
    cy.viewport(300, 600);
    cy.mount(
      <BrowserRouter>
        <Breadcrumbs
          parent={{ name: "computing", slug: "computing" }}
          grandParent={{ name: "maths", slug: "maths" }}
        />
      </BrowserRouter>,
    );

    cy.get("[data-testid=mobile-parent]")
      .find("button")
      .should("have.css", "color", "rgb(255, 255, 255)");

    cy.get("[data-testid=mobile-grandParent]")
      .find("button")
      .should("have.css", "color", "rgb(255, 255, 255)");

    cy.get("[data-testid=mobile-parent]")
      .find("button")
      .should("have.css", "background-color", "rgb(78, 77, 77)");
    // cy.get("[data-testid=mobile-grandParent]")
    //   .find("button")
    //   .should("have.css", "background-color", "rgb(62, 61, 61)");
  });
});
