import { MainPage } from "./MainPage"

export class ActiveTasksPage extends MainPage {
  elements = {
    activeTab: () => cy.get('.filters a').contains('Active'),
    deleteButton: () => cy.get('.destroy')
  }

  navigateToActive() {
    this.elements.activeTab().click()
    return this
  }

  deleteTask(taskText) {
    this.elements.todoList()
      .contains('li', taskText)
      .realHover()
      .within(() => {
        this.elements.deleteButton().click({ force: true })
      })
    return this
  }

  validateTaskNotExists(taskText) {
    this.elements.todoList().should('not.contain', taskText)
    return this
  }
}
