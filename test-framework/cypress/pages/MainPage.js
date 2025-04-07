export class MainPage {
    elements = {
      inputField: () => cy.get('.new-todo'),
      todoList: () => cy.get('.todo-list')
    }
  
    visit() {
      cy.visit('/')
    }
  
    addTask(text) {
      this.elements.inputField().type(`${text}{enter}`)
      return this
    }
  
    validateTaskText(expectedText) {
      this.elements.todoList().should('contain', expectedText)
      return this
    }
  
    generateRandomString(length) {
      let result = ''
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      }
      return result
    }
  
    validatePlaceholder(expectedText) {
      this.elements.inputField().should('have.attr', 'placeholder', expectedText)
      return this
    }
  }
  