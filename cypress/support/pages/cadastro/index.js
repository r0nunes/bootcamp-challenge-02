import Routes from '../../routes'

const faker = require('faker')
const el = require('./elementos').ELEMENTS

var user = faker.name.firstName() + faker.name.lastName()
class cadastro { 

    preencherFormualario() { 
        cy.get(el.inputUser).type(user);
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type('12345678');  
    }

    submeterCadastro() { 
        cy.get(el.buttonSubmit).click();
    }

    validarSeOCadastroFoiRealizado() { 
        cy.wait(`@${Routes.as.postUsers}`).then((postUsersResponse) => { 
            expect(postUsersResponse.status).to.eq(200)
        })

        cy.wait(`@${Routes.as.getTags}`).then((getTagsResponse) => { 
            expect(getTagsResponse.status).to.eq(200)
        })

        cy.get(el.userFeed).should('contain','Your Feed');
        cy.get(el.userLogged).should('contain', user);
    }    
}

export default new cadastro();
