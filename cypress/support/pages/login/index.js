import Routes from '../../routes'

const el = require('./elementos').ELEMENTS
 
class login { 

    acessarLogin(){ 
        cy.visit('login');
    }
    
    preencherFormulario(){
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputPassword).type(Cypress.config().user.password);
    }

    submeterFormulario(){
        cy.get(el.buttonSubmit).click();
    }

    validarSeOloginFoiRealizado(){ 

        // Validação de rotas
        cy.wait(`@${Routes.as.postLogin}`).then((postLoginResponse) => { 
            expect(postLoginResponse.status).to.eq(200);
        });

        cy.wait(`@${Routes.as.getTags}`).then((getTagsResponse) => { 
            expect(getTagsResponse.status).to.eq(200);
        });

        cy.wait(`@${Routes.as.getFeed}`).then((getHomeFeedResponse) => { 
            expect(getHomeFeedResponse.status).to.eq(200);
        });

        // Validação UI
        cy.get(el.userFeed).should('contain','Your Feed');
        cy.get(el.userLogged).should('contain', Cypress.config().user.username);
    }
 }

 export default new login();