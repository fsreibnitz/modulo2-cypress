/// <reference types="cypress" />
import Routes from '../routes'

const elements =  require('./elements').ELEMENTS
const faker = require('faker')

class Cadastro {
	//Arrange
	acessarCadastro(){ 
		cy.visit('register')
	}

 //Act
	preencherCadastro(){
		cy.get(elements.inputUsername).type(faker.name.firstName() + faker.name.lastName())
		cy.get(elements.inputEmail).type(faker.internet.email())
		cy.get(elements.inputPassword).type('teste1234')
	}

	enviarCadastro(){ 
		cy.get(elements.buttonSubmit).click()
	}

	 //Assert
	verificarCadastroCriadoComSucesso(){
		cy.wait(`@${Routes.nomeRotas.postUser}`).then(({response}) => {
			expect(response.statusCode).to.eq(200)
		})
	}
}
export default new Cadastro()