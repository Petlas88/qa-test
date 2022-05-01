/// <reference types="cypress" />
declare namespace Cypress {
    interface Chainable<Subject = any> {
        getByTestId(testId: string): Chainable
        /**
         * Custom command to fetch all matching DOM elements by prefix on the data-testid attribute.
         * @example cy.getMatchesByTestId('jobindex-')
         */
        getByTestIdPrefix(testId: string): Chainable
        /**
         * Custom command to visit a page and spy for errors reported to the console
         * @example cy.visitWithErrorSpy()
         */
        visitWithErrorSpy(path: string): Chainable
    }
}
