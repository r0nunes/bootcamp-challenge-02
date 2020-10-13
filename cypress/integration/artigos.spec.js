/// <reference types="cypress" />

import artigos from '../support/pages/artigos'
import Routes from '../support/routes'

context('Publicação', () => {
    beforeEach(() => {
        
        cy.backgroundLogin();
        
        // Preparação
        artigos.acessarFormularioDeNovaPublicacao()
    });

    it('Criar uma nova publicação', () => {
        // Ação
        artigos.preencherFormulario();
        artigos.submeterPublicacao();

        // Verificação
        artigos.verificarSeAPublicacaoFoiCriadaComSucesso();
    });
});