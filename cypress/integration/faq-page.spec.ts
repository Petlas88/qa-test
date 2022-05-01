import {accordionData} from '../../src/utils/accordion-data'

describe("FAQ Page", () => {
  before(() => {
    cy.visit("/faq");
  });

  it("should render without errors", () => {
    cy.visitWithErrorSpy('/')
  });

  it("should have correct hrefs", () => {
    cy.getByTestId("phone-link")
      .should("exist")
      .and("have.attr", "href", "tel:+4799999999");
    cy.getByTestId("email-link")
      .should("exist")
      .and("have.attr", "href", "mailto:info@faq.no");
  });

  it("should render accordions correctly and be able to toggle length", () => {
    const initialAccordions = 5;
    cy.getByTestIdPrefix("accordion-item-button-")
      .should("exist")
      .and("have.length", initialAccordions)
    cy.getByTestId("show-more-button")
      .should("exist")
      .then((button) => parseInt(button.text().split(" ")[1]))
      .then((numberOfHiddenAccordions) => {
        cy.getByTestId("show-more-button").click();
        cy.getByTestIdPrefix("accordion-item-button-").should(
          "have.length",
          initialAccordions + numberOfHiddenAccordions
        );
        cy.getByTestId("show-more-button").click();
        cy.getByTestIdPrefix("accordion-item-button-").should(
          "have.length",
          initialAccordions
        );
      });
  });

  it("should be able to render open accordions and display the text", () => {
    cy.getByTestId("show-more-button").click();
    for (let entry in accordionData) {
      cy.getByTestId(`accordion-item-button-${accordionData[entry].id}`).click();
      cy.getByTestId(`accordion-item-text-${accordionData[entry].id}`).should("exist").and("have.text", accordionData[entry].content);
    }
  })
});
