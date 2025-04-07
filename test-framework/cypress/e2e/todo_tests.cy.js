import { MainPage } from "../pages/MainPage"
import { ActiveTasksPage } from "../pages/ActiveTasksPage"

describe('Todo App Tests', () => {
  const mainPage = new MainPage()
  const activePage = new ActiveTasksPage()

  beforeEach(() => {
    mainPage.visit()
  })

  it('TC1: Dodanie zadania o maksymalnej długości znaków', () => {
    const randomText = mainPage.generateRandomString(255)
    
    mainPage
      .addTask(randomText)
      .validateTaskText(randomText)
  })

  it('TC2: Dodanie zadania ze znakami specjalnymi', () => {
    cy.fixture('testData').then((data) => {
      mainPage
        .addTask(data.specialCharacters)
        .validateTaskText(data.specialCharacters)
    })
  })

  it('TC3: Usunięcie zadania za pomocą przycisku X', () => {
    cy.fixture('testData').then((data) => {
      mainPage.addTask(data.sampleTask)
      activePage
        .navigateToActive()
        .deleteTask(data.sampleTask)
        .validateTaskNotExists(data.sampleTask)
    })
  })

  it('TC4: Weryfikacja placeholdera', () => {
    mainPage.validatePlaceholder('What needs to be done?')
  })
})
