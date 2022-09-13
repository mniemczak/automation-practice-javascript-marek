// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('TodoMVC - React', function () {
	// setup these constants to match what TodoMVC does
	let TODO_ITEM_ONE = 'buy some cheese';
	let TODO_ITEM_TWO = 'feed the cat';
	let TODO_ITEM_THREE = 'book a doctors appointment';

	beforeEach(function () {
		// By default Cypress will automatically
		// clear the Local Storage prior to each
		// test which ensures no todos carry over
		// between tests.
		//
		// Go out and visit our local web server
		// before each test, which serves us the
		// TodoMVC App we want to test against
		//
		// We've set our baseUrl to be http://localhost:8888
		// which is automatically prepended to cy.visit
		//
		// https://on.cypress.io/api/visit
		cy.visit('/');
	});

	afterEach(() => {
		// In firefox, blur handlers will fire upon navigation if there is an activeElement.
		// Since todos are updated on blur after editing,
		// this is needed to blur activeElement after each test to prevent state leakage between tests.
		cy.window().then((win) => {
			// @ts-ignore
			win.document.activeElement.blur();
		});
	});

	context('New Todo', function () {
		// New commands used here:
		// https://on.cypress.io/type
		// https://on.cypress.io/eq
		// https://on.cypress.io/find
		// https://on.cypress.io/contains
		// https://on.cypress.io/should
		// https://on.cypress.io/as

		// a very simple example helpful during presentations
		it.only('adds 2 todos', function () {
			cy.get('.new-todo').type('learn testing{enter}').type('be cool{enter}');
			cy.get('.todo-list li').should('have.length', 2);
		});

		it('should allow me to add todo items', function () {
			// create 1st todo
			cy.get('.new-todo').type(TODO_ITEM_ONE).type('{enter}');

			// make sure the 1st label contains the 1st todo text
			cy.get('.todo-list li')
				.eq(0)
				.find('label')
				.should('contain', TODO_ITEM_ONE);

			// create 2nd todo
			cy.get('.new-todo').type(TODO_ITEM_TWO).type('{enter}');

			// make sure the 2nd label contains the 2nd todo text
			cy.get('.todo-list li')
				.eq(1)
				.find('label')
				.should('contain', TODO_ITEM_TWO);
		});

		it('adds items', function () {
			// create several todos then check the number of items in the list
			cy.get('.new-todo')
				.type('todo A{enter}')
				.type('todo B{enter}') // we can continue working with same element
				.type('todo C{enter}') // and keep adding new items
				.type('todo D{enter}');

			cy.get('.todo-list li').should('have.length', 4);
		});
	});

	context('Item', function () {
		it('should allow me to edit an item', function () {
			cy.get('.new-todo').type(TODO_ITEM_ONE).type('{enter}').as('todos');

			cy.get('todo-list')
				.eq(0)
				.as('secondTodo')
				// TODO: fix this, dblclick should
				// have been issued to label
				.find('label')
				.dblclick();

			// clear out the inputs current value
			// and type a new value
			cy.get('@secondTodo')
				.find('.edit')
				.clear()
				.type('buy some sausages')
				.type('{enter}');

			// explicitly assert about the text value
			cy.get('@todos').eq(0).should('contain', TODO_ITEM_ONE);

			cy.get('@secondTodo').should('contain', 'buy some sausages');
			cy.get('@todos').eq(2).should('contain', TODO_ITEM_THREE);
		});
	});
});
