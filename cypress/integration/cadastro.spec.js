/// <reference types="cypress" />

context('Cadastro', () => {
const faker = require('faker')
	it('Cadastrar um novo usuario', () => {
		cy.visit('register')
		// input[ng-model*=username]
		// input[ng-model*=email]
		// input[ng-model*=password]
		// button.btn-primary

		cy.get('input[ng-model*=username]').type(faker.name.firstName() + faker.name.lastName())
		cy.get('input[ng-model*=mail]').type(faker.internet.email())
		cy.get('input[ng-model*=password]').type('teste1234')
		cy.get('button.btn-primary').click()
	});
});