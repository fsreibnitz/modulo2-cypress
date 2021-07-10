const elements = require('./elements').ELEMENTS
import Routes from '../routes'

class Login {
	// Arrange
  acessarLogin(){ 
		cy.visit('login')
	}

	//Acts 
	preencherFormulario(){
		cy.get(elements.inputEmail).type(Cypress.config().user.email)
		cy.get(elements.inputPassword).type('teste1234')
	}

	enviarFormulario(){ 
		cy.get(elements.buttonSubmit).click()
	}

	//Asserts
	verificarLoginComSucesso(){
		cy.wait(`@${Routes.nomeRotas.getFeed}`).then(({response}) => {
			expect(response.statusCode).to.eq(200)
		})
	}

	verificarUsuarioLogado(){
		cy.get(elements.linkUsername)
		cy.url().should("contain", "")
	}
}

export default new Login()