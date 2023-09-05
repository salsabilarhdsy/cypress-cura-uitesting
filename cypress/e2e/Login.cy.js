
describe('Login', () => {
  beforeEach(function () {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.get('#menu-toggle > .fa').click()
    cy.get('.sidebar-nav > :nth-child(4) > a').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
    cy.get('.sidebar-nav > :nth-child(5) > a').should('exist')
  });

  afterEach(function () {
    // runs after each test in this block
  });

  it('Make an appoitnment', () => {
    cy.get('#combo_facility').click()
    cy.get('#chk_hospotal_readmission').click()
  })
})

