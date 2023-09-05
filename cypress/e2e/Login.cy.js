
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
    cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
    //cy.contains('Seoul CURA Healthcare Center').click()
    cy.get('#chk_hospotal_readmission').click()
    cy.get('#txt_visit_date').type('22/09/2023')
    cy.get('body').click(0,0);
    cy.get('#txt_comment').type('Notes about appointment')
    cy.get('#btn-book-appointment').click()
    cy.get('h2').contains('Appointment Confirmation')


  })
})

