import todoPageSelectors from "./todoPageSelectors"
import basePage from '../basePage.js'


class TodoPage {

    constructor() {

    }


    addTodo(todoName = 'Nowe zadanie todo'){
        cy.get(todoPageSelectors.newTodoInput)
				.type(todoName)
				.type('{enter}')
    }

    checkAddTodo() {
        cy.get(todoPageSelectors.todoList).should('have.length');
    }
}

export const todoPage = new TodoPage()

// module.exports.todoPage