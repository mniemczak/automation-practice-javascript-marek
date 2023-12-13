import loginPageSelectors from './loginPageSelectors'
import BasePage from '../basePage'


class LoginPage extends BasePage{

    constructor() {

        super()
    }


    login(option = 'default', email = 'administrator@testarena.pl', pass = 'sumXQQ72$L') {
        
        if(option === 'default') {
           
            cy.get(loginPageSelectors.email).type(email)
            cy.get(loginPageSelectors.password).type(pass)
            cy.get(loginPageSelectors.loginBtn).contains('Zaloguj').click()
        } else if (option === 'falsePass') {
            cy.get(loginPageSelectors.email).type(email)
            cy.get(loginPageSelectors.password).type(pass)
            cy.get(loginPageSelectors.loginBtn).contains('Zaloguj').click()
        } else if (option === 'random') {
            cy.get(loginPageSelectors.email).type(this.randomString())
            cy.get(loginPageSelectors.password).type(pass)
            cy.get(loginPageSelectors.loginBtn).contains('Zaloguj').click()

            return this
        }
    }

    checkLoginPageElements() {
        cy.url().should('include', 'demo.testarena.pl/')
        cy.get('.front-log').should('be.visible')

        this.login()
    }
}


export const loginPage = new LoginPage()