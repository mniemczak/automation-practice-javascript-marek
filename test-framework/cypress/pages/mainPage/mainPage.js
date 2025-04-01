import BasePage from "../basePage";






export class MainPage extends BasePage {

    constructor() {
        super()
    }

    checkMyTasks(){
        cy.url().should('contain', 'demo.testarena.pl')
        cy.get('.article_left_box > h4:nth-child(1)').should('be.visible')
    }
}