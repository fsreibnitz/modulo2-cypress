const elements = require('./elements').ELEMENTS

class Login {
  acessarLogin(){
		cy.visit('login')
	}

	preencherFormulario(){
		cy.get(elements.inputEmail).type(Cypress.config().user.email)
		cy.get(elements.inputPassword).type('teste1234')
	}
enviarFormulario(){
	cy.get(elements.buttonSubmit).click()

}
}

export default new Login()