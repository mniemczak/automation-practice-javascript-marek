/// <reference types="cypress" />
it('loads page', () => {
  cy.visit('/')
  cy.contains('TodoMVC').should('be.visible')
})
