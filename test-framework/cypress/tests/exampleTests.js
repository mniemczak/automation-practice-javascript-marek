

/// <reference types="cypress" />




describe("Demo - TestArena tests", function () {
    
    context('Example login tests', function () {


        it('should login to admin', function() {
           
            cy.visit('http://demo.testarena.pl/zaloguj')
            cy.get('#email').type("administrator@testarena.pl")
            cy.get('#password').type('sumXQQ72$L')
            cy.get('#login').contains('Zaloguj').click()
            
            cy.url().should('include', 'demo.testarena.pl/')
            cy.get('.top_avatar_header').should('be.visible')
            
        })
    })
})