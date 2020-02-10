/* eslint-disable no-undef */
/// <reference types="Cypress" /

describe('My First Test', function() {
  it('test', function() {
    cy.visit('http://localhost:3000');
    cy.contains('Counter').click();
    cy.url().should('include', '/#1');

    cy.get('.id')
      .type('taristmas@gmail.com') // 입력
      .should('have.value', 'taristmas@gmail.com'); 

    cy.get('#button').click(); // 클릭

    cy.get('#val').invoke('text').should('eq', '1'); // innerHtml 뽑기?
    cy.screenshot(`${Date.now()}`)
      
  })
})  