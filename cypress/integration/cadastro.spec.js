/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro'

context('Cadastro', () => {
  it('Cadastrar um novo usuário', () =>{ 

    cy.visit('register');
    
    cadastro.preencherFormualario();
    cadastro.submeterCadastro();
    cadastro.validarSeOCadastroFoiRealizado();
  });

  
})
