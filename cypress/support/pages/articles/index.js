/// <reference types="cypress" />

const faker = require('faker')
const elements = require('./elements').ELEMENTS
import Routes from '../routes'

class Articles {
	acessarFormularioNovoPost(){
		cy.get('a[href*=editor]').click()
	}

	preencherFormulario(){
		cy.get(elements.inputTitle).type('Teste')
		cy.get(elements.inputDescription).type(faker.lorem.text())
		cy.get(elements.textAreaBody).type(faker.lorem.sentences(1))
		cy.get(elements.inputTagField).type(faker.lorem.words(3))
	}

	submeterPost(){
		cy.get(elements.buttonSubmit).click()

	}
 
	verificarSePostFoiCriadoComSucesso(){
	
		//template string
	 cy.wait(`@${Routes.nomeRotas.postArticles}`).then(({request,response}) => {
		 expect(response.statusCode).to.eq(200)
	 })

	 cy.wait(`@${Routes.nomeRotas.getArticlesTitle}`).then(({request,response}) => {
		 expect(response.statusCode).to.eq(200)
	 })
	 cy.wait(`@${Routes.nomeRotas.getArticlesTitleComments}`).then(({request,response}) => {
		 expect(response.statusCode).to.eq(200)
	 })
	}
}

export default new Articles();