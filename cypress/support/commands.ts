Cypress.Commands.add('visitWithErrorSpy', (path: string) =>
    cy.visit(path, {
        onBeforeLoad(win) {
            cy.spy(win.console, 'error').as('consoleError')
        },
    })
)

Cypress.Commands.add('getByTestId', (testId) => {
    return cy.get(`[data-testid=${testId}]`)
})

Cypress.Commands.add('getByTestIdPrefix', (testId) => {
    return cy.get(`[data-testid^="${testId}"]`)
})

