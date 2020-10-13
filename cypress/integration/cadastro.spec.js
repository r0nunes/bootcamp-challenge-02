/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro'

context('Cadastro', () => {
  it('Cadastrar um novo usuário', () =>{ 

    cy.server();
    cy.route('POST', '**users**' ).as('postLogin');
    cy.route('GET', '**tags**' ).as('getTags');

    cy.visit('register');
    
    cadastro.preencherFormualario();
    cadastro.submeterCadastro();

    cy.wait('@postLogin').then((resLogin) => { 
      expect(resLogin.status).to.eq(200)
    })

    cy.wait('@getTags').then((resTags) => { 
      expect(resTags.status).to.eq(200)
    })
    
   
  });

  
})
