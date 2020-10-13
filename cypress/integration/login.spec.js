/// <reference types="cypress" />

import login from '../support/pages/login'

context('Login', { browser: '!edge'}, () => {
    it('Realizar login com sucesso', () => {

        cy.server();

        cy.route('POST', '**/api/users/login').as('postLogin');
        cy.route('GET', '**/api/articles/feed?**').as('getArticlesFeed');

        login.acessarLogin();
        login.preencherFormulario();
        login.submeterFormulario();

        cy.wait('@postLogin').then((resLogin) => { 
            expect(resLogin.status).to.eq(200)
          })

        cy.wait('@getArticlesFeed').then((resArticlesFeed) => { 
            expect(resArticlesFeed.status).to.eq(200)
        })
    });

});