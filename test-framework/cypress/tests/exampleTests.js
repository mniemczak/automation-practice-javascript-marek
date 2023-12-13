/// <reference types="cypress" />

import {loginPage} from '../pages/loginPage/loginPage'


describe("Demo - TestArena tests", function () {
    
    context('Example login tests', function () {


        it('should login to admin', function() {
           
            cy.visit('http://demo.testarena.pl/zaloguj')
       
            loginPage.login()
            
            cy.url().should('include', 'demo.testarena.pl/')
            cy.get('.top_avatar_header').should('be.visible')
            
        })

        it('should not login to admin', function() {
           
            cy.visit('http://demo.testarena.pl/zaloguj')
            cy.get('#email').type("administratortestarena.pl")
            cy.get('#password').type('sumXQQ72$L')
            cy.get('#login').contains('Zaloguj').click()
            
            cy.url().should('include', '/zaloguj')
            cy.get('.top_avatar_header').should('not.be.visible')
            cy.get('.login_form_error').eq(0).should('be.visible').and('include.text','Nieprawidłowy format adresu e-mail. Wprowadź adres ponownie.')
            cy.get('.login_form_error').eq(1).should('be.visible').and('include.text', 'Adres e-mail i/lub hasło są niepoprawne.')
        })
    })
})