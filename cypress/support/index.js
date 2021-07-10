// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import Routes from "./pages/routes";

Cypress.Commands.add('backGroundLogin', () => {
		//Processo de login em background
	//1 realizar uma requisição do tipo post com email válido
	//2 capturar o token que é recebido pela requisição
	//3 usar o token recebido para salvar no local storage
	cy.request({
		method: 'POST',
		url: `${Cypress.config().apiUrl}users/login`,
		body: { 
			user: {
				email: 'fabio@mail.com',
				password: 'teste1234'
			}
		}
	}).then((loginResponse) => {
		console.log(loginResponse.body)
		cy.log(loginResponse.body.user.token)
		cy.visit('editor', {
			onBeforeLoad: (win) => {
				win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
			}
		})
});

})

beforeEach(() => {
	Routes.init()
})