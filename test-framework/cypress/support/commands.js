// ***********************************************
// This example commands.js shows you how to
// create the custom commands: 'createDefaultTodos'
// and 'createTodo'.
//
// The commands.js file is a great place to
// modify existing commands and create custom
// commands for use throughout your tests.
//
// You can read more about custom commands here:
// https://on.cypress.io/commands
// ***********************************************

Cypress.Commands.add('createDefaultTodos', function () {
	let TODO_ITEM_ONE = 'buy some cheese';
	let TODO_ITEM_TWO = 'feed the cat';
	let TODO_ITEM_THREE = 'book a doctors appointment';

	cy.get('.new-todo', { log: false })
		.type(`${TODO_ITEM_ONE}{enter}`, { log: false })
		.type(`${TODO_ITEM_TWO}{enter}`, { log: false })
		.type(`${TODO_ITEM_THREE}{enter}`, { log: false });
});

Cypress.Commands.add('createTodo', function (todo) {
	let cmd = Cypress.log({
		name: 'create todo',
		message: todo,
		consoleProps() {
			return {
				'Inserted Todo': todo,
			};
		},
	});

	// create the todo
	cy.get('.new-todo', { log: false }).type(`${todo}{enter}`, { log: false });

	// now go find the actual todo
	// in the todo list so we can
	// easily alias this in our tests
	// and set the $el so its highlighted
	cy.get('.todo-list', { log: false })
		.contains('li', todo.trim(), { log: false })
		.then(function ($li) {
			// set the $el for the command so
			// it highlights when we hover over
			// our command
			cmd.set({ $el: $li }).snapshot().end();
		});
});
