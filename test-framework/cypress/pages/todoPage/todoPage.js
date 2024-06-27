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

        return this
    }

    checkAddTodo() {
        cy.get(todoPageSelectors.todoList).should('have.length', 2);

        return this
    }
}

export const todoPage = new TodoPage()

// module.exports.todoPage