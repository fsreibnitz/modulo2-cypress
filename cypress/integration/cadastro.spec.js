/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro';

context('Cadastro', () => {
	it('Cadastrar um novo usuario', () => {
		cadastro.acessarCadastro()
		cadastro.preencherCadastro()
		cadastro.enviarCadastro()
		cadastro.verificarCadastroCriadoComSucesso()
	});

	
});