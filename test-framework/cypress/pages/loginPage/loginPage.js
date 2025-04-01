import BasePage from "../basePage";






export class LoginPage extends BasePage {

    constructor() {
        super('TestArena Login Page')
    }

    login(email, pass, loginPageName) {

        cy.get('#email').type(email)
        cy.get('#password').type(pass)

        cy.get("#login").contains('Zaloguj').click()
    }

    getLoginPageUrl() {

        let loginPageUrl = this.url
        loginPageUrl = 'http://demo.testarena.pl/zaloguj'
        return loginPageUrl
    }
}