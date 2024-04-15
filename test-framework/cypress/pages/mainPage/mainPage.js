import mainPageSelectors from './mainPageSelectors'
import BasePage from '../basePage'


class MainPage extends BasePage{

    constructor() {

        super()
    }

    checkMainPageElements() {
        cy.url().should('include', 'demo.testarena.pl/')
        cy.get(mainPageSelectors.userAvatar).should('be.visible')
    }
    

    getMyTasksList(myTaskElementPosition = 0, taskElementsListPosition = 0) {
        cy.get(mainPageSelectors.myTasks).should('be.visible')
        cy.get(mainPageSelectors.myTasks).eq(myTaskElementPosition).find('div')
        .eq(taskElementsListPosition).should('be.visible')
    }
}


export const mainPage = new MainPage()