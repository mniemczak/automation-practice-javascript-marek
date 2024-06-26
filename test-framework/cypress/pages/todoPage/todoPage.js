import todoPageSelectors from "./todoPageSelectors"



class TodoPage {


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