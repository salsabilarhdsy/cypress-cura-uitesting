// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('loginUI', (username, password) => {
    cy.session('username',
      () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
        cy.get('#menu-toggle > .fa').click()
        cy.get('.sidebar-nav > :nth-child(4) > a').click()
        cy.get('#txt-username').type(username)
        cy.get('#txt-password').type(password)
        cy.get('#btn-login').click()
        cy.get('.sidebar-nav > :nth-child(5) > a').should('exist')
      })
    })
  
// to use: cy.loginUI('John Doe', 'ThisIsNotAPassword')