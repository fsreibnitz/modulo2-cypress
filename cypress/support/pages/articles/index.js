/// <reference types="cypress" />

import Routes from '../routes'

const faker = require('faker')
const elements = require('./elements').ELEMENTS

class Articles {

	acessarFormularioNovoPost(){ //Arrange
		cy.get(elements.linkNovoPost).click()
	}

//Act
	preencherFormulario(){ 
		cy.get(elements.inputTitle).type(Cypress.config().post.title)
		cy.get(elements.inputDescription).type(faker.lorem.text())
		cy.get(elements.textAreaBody).type(faker.lorem.sentences(1))
		cy.get(elements.inputTagField).type(faker.lorem.words(3))
	}

	submeterPost(){ 
		cy.get(elements.buttonSubmit).click()
	}

 //Assert
	verificarSePostFoiCriadoComSucesso(){ 
	 	cy.wait(`@${Routes.nomeRotas.postArticles}`).then(({response}) => {
			 expect(response.statusCode).to.eq(200)
	 	})

		cy.wait(`@${Routes.nomeRotas.getArticlesTitle}`).then(({response}) => {
		 	expect(response.statusCode).to.eq(200)
	 	})

	 	cy.wait(`@${Routes.nomeRotas.getArticlesTitleComments}`).then(({response}) => {
		 	expect(response.statusCode).to.eq(200)
		 })
	}
}

export default new Articles();