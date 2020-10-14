[![Build Status](https://dev.azure.com/ronunes0342/Agilizei%20Bootcamp%2002/_apis/build/status/r0nunes.bootcamp-challenge-02?branchName=main)](https://dev.azure.com/ronunes0342/Agilizei%20Bootcamp%2002/_build/latest?definitionId=1&branchName=main)

![as](https://agilizei.files.wordpress.com/2020/08/agilizei.png?w=120&h=580)

# bootcamp-desafio-02

Projeto desenvolvido para atender os requisitos do desafio 02, referente ao MOD-02 do bootcamp. 

## Arquitetura

- Cypress @ 5.3.0
- NodeJS @ v10.19
- NPM @ 6.14.4

### Dependecias
- faker js

## Desafio

- Criar teste para cadastro de usuário.
- Criar teste para login do usuário cadastrado.
- Criar teste para criação e publicação de um artigo.
- Utilizar Page Objects para separação de responsabilidade dos testes. 
- Criar asserções com rotas e validações em tela. 
- Separar as responsábilidades das rotas. 
- Configurar a pipeline de testes na Azure DevOPS
- Realizar a publicação dos relatórios na Azure DevOPS.

# Execução do projeto

Para executar o projeto: 

- Clonar o repositório
- Dentro da raiz do projeto, executar o comando abaixo:
`npm install`
- Após o término, executar o comando:
-- Para electron: `npm run cy:run:electron`
-- Para chrome: `npm run cy:run:chrome`
-- Para firefox: `npm run cy:run:firefox`

Lembrando que a execução acima é feita em modo headless, ou seja, não teremos visão da interface gráfica nessa situação. 

Após o término da execução, é possível visualizar os videos no repositório cypress/videos.

# Azure DevOps Pipeline + Reports

O projeto está configurado para rodar em uma pipeline da azure. 

Para visualizar a pipeline, acesse: https://dev.azure.com/ronunes0342/Agilizei%20Bootcamp%2002/_build/results?buildId=7&view=results




