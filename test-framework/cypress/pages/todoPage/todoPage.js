import todoPageSelectors from "./todoPageSelectors"
import BasePage from '../basePage.js'


class TodoPage extends BasePage{

    constructor() {
        super()
    }


    addTodo(todoName = 'Nowe zadanie todo'){
        cy.get(todoPageSelectors.newTodoInput)
				.type(todoName)
				.type('{enter}')
    }

    checkAddTodo() {
        cy.get(todoPageSelectors.todoList).should('have.length', 2);
    }
}

export const todoPage = new TodoPage()

// module.exports.todoPage