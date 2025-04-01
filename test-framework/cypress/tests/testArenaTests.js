/// <reference types="cypress" />

import { LoginPage } from "../pages/loginPage/loginPage";
import { MainPage } from "../pages/mainPage/mainPage";


describe("Login to app scenario", function () {

    context('Proper login to Admin tests', function() {
        it('Proper login', function() {
            let loginPage = new LoginPage()
            let mainPage = new MainPage()

            loginPage.visitPage()
            loginPage.login('administrator@testarena.pl', 'sumXQQ72$L')

           // cy.url().should('contain', 'demo.testarena.pl')
           // cy.get('.article_left_box > h4:nth-child(1)').should('be.visible')
           mainPage.checkMyTasks()
           
        })
    })
})