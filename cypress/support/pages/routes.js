/// <reference types="cypress" />


class Routes {

	nomeRotas = {
		postArticles: 'POSTArticles',
		getArticlesTitle: 'GETArticles',
		getArticlesTitleComments: 'GETArticlesComments',
		postUser: 'POSTUser',
		getFeed: 'GETFeed'
		}

init(){
	cy.intercept({
		method:'POST',
		path: '**/api/articles'
	}).as(this.nomeRotas.postArticles);

	//deixar a url do titulo em lowercase
	var titleUrl = `${Cypress.config().post.title}`
									.split(" ", 1)[0].toLocaleLowerCase()

	cy.intercept({
 		method:'GET',
 		path: `**/api/articles/**`
	}).as(this.nomeRotas.getArticlesTitle);

	cy.intercept({
 		method:'GET',
 		path: `**/api/articles/${titleUrl}**/comments`
	}).as(this.nomeRotas.getArticlesTitleComments);

	cy.intercept({
		method: 'POST',
		path: '**/api/users'	
	}).as(this.nomeRotas.postUser)

	cy.intercept({
		method: 'GET',
		path: "**/api/articles/feed**"
	}).as(this.nomeRotas.getFeed)
	

}
}

export default new Routes()