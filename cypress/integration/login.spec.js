/// <reference types="cypress" />

import login from '../support/pages/login'

context('Login', { browser: '!edge'}, () => {
    it('Realizar login com sucesso', () => {
       
        login.acessarLogin();
        login.preencherFormulario();
        login.submeterFormulario();
        login.validarSeOloginFoiRealizado();
    });

});