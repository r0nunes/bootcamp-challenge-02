const faker = require('faker')

const el = require('./elementos').ELEMENTS

class cadastro { 

    preencherFormualario() { 
        cy.get(el.inputUser).type(faker.name.firstName() + faker.name.lastName());
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type('12345678');  
    }

    submeterCadastro() { 
        cy.get(el.buttonSubmit).click();
    }
}

export default new cadastro();
