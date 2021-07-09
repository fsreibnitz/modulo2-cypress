/// <reference types="cypress" />

class Routes {

	nomeRotas = {
		postArticles: 'POSTArticles',
		getArticlesTitle: 'GETArticles',
		getArticlesTitleComments: 'GETArticlesComments'
		}

init(){
	cy.intercept({
		method:'POST',
		path: '**/api/articles'
	}).as(this.nomeRotas.postArticles);

	cy.intercept({
 		method:'GET',
 		path: '**/api/articles/teste**'
	}).as(this.nomeRotas.getArticlesTitle);

	cy.intercept({
 		method:'GET',
 		path: '**/api/articles/teste**/comments'
	}).as(this.nomeRotas.getArticlesTitleComments);

}
}

export default new Routes()