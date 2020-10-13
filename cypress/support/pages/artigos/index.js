/// <reference types="cypress"/>

import Routes from '../../routes'

const faker = require ('faker')
const el = require('./elementos').ELEMENTS

var ArticleTitle = faker.lorem.words(2)

class Artigos { 

    acessarFormularioDeNovaPublicacao() { 
        cy.get(el.linkNovaPublicao).click();
    }

    preencherFormulario() { 
        cy.get(el.inputTitle).type(ArticleTitle);
        cy.get(el.inputDescription).type('Cypress Bootcamp');
        cy.get(el.textAreaContent).type(faker.lorem.paragraph());
        cy.get(el.inputTags).type('cypress');
       
    }

    submeterPublicacao() { 
        cy.get(el.buttonSubmit).click();    
    }

    verificarSeAPublicacaoFoiCriadaComSucesso() { 

        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => { 
            expect(postArticlesResponse.status).to.eq(200)
        });

        cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesTitleResponse) => { 
            expect(getArticlesTitleResponse.status).to.eq(200)
        });

        cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((getArticlesTitleCommentsResponse) => { 
            expect(getArticlesTitleCommentsResponse.status).to.eq(200)
        });

        cy.get(el.postTitle).should('contain',ArticleTitle);
    }

    
}

export default new Artigos();