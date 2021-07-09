/// <reference types="cypress" />

import login from '../support/pages/login';

context('Login', {browser: '!firefox'}, () => {
	it('Fazer login com sucesso', () => {
	
		login.acessarLogin()
		login.preencherFormulario()
		login.enviarFormulario()
	});
});