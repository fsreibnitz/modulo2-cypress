/// <reference types="cypress" />
import Routes from '../routes'

const elements =  require('./elements').ELEMENTS
const faker = require('faker')

class Cadastro {
	
	acessarCadastro(){ //Arrange
		cy.visit('register')
	}

	preencherCadastro(){ //Act
		cy.get(elements.inputUsername).type(faker.name.firstName() + faker.name.lastName())
		cy.get(elements.inputEmail).type(faker.internet.email())
		cy.get(elements.inputPassword).type('teste1234')
	}

	enviarCadastro(){ //Act
		cy.get(elements.buttonSubmit).click()
	}

	verificarCadastroCriadoComSucesso(){ //Assert
		cy.wait(`@${Routes.nomeRotas.postUser}`).then(({response}) => {
			expect(response.statusCode).to.eq(200)
		})
	}
}
export default new Cadastro()