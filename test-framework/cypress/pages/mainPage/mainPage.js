import BasePage from "../basePage";
let mapTasksAssignedToMe = {
    overall: 0
}



function getSelectors() {
    return {
        myTasks: '.article_left_box > h4:nth-child(1)',
        tasksAssignedToMe: ".article_box.dsb>div>*"
    }
}

export class MainPage extends BasePage {

    constructor() {
        super()
    }

    checkMyTasks() {
        cy.url().should('contain', 'demo.testarena')
        cy.get(getSelectors()).should('be.visible')
    }

    getTasksAssignedToMe(taskName, taskPosition = mapTasksAssignedToMe) {
        if(taskName === 'overall'){

        }
        
        return cy.get(getSelectors().tasksAssignedToMe).eq(taskPosition[taskName])

        // cy.get(getSelectors().tasksAssignedToMe).eq(taskPosition[taskName]).find('a')
    }
}