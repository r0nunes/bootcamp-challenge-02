/// <reference types="cypress" />

import artigos from '../support/pages/artigos'
import Routes from '../support/routes'

context('Publicação', () => {
    beforeEach(() => {
        cy.backgroundLogin();
        artigos.acessarFormularioDeNovaPublicacao()
    });

    it('Criar uma nova publicação', () => {
        artigos.preencherFormulario();
        artigos.submeterPublicacao();
        artigos.verificarSeAPublicacaoFoiCriadaComSucesso();
    });
});