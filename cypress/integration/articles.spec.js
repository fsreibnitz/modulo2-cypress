import articles from '../support/pages/articles';
context('Posts', () => {
	//hooks -> momentos antes / depois do teste
	//before /beforeEach
	//after /afterEach
beforeEach(() => {
	cy.backGroundLogin()
	articles.acessarFormularioNovoPost()
});

	it('Criar novo post', () => {
	  articles.preencherFormulario()
		articles.submeterPost()
		articles.verificarSePostFoiCriadoComSucesso()
	});
	
})