/* eslint-disable no-undef */
/// <reference types="Cypress" /

describe('네이버쇼핑', function() {
    it('네이버쇼핑 - "코로나" 검색', function() {
      cy.visit('https://shopping.naver.com/home/p/index.nhn')
      cy.get('[_clickcode="search"]').as('searchButton')

      cy.get('#autocompleteWrapper > input')
        .first()
        .type('코로나')

      cy.get('@searchButton')
        .click()

      cy.get('#_queryExplain > em')
        .invoke('text', '코로나')
        

      cy.screenshot(`${Date.now()}`)
        
    })
  })  