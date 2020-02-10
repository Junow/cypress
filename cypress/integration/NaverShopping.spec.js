/* eslint-disable no-undef */
/// <reference types="Cypress" /

describe('네이버쇼핑', function() {
    it('네이버쇼핑 - "코로나" 검색', function() {
      cy.visit('https://search.shopping.naver.com/search/all_search.nhn?query=%EC%BD%94%EB%A1%9C%EB%82%98&cat_id=&frm=NVSHATC');
      cy.get('#_queryExplain')
        .should('have.class', 'right_word')
        
      cy.screenshot(`${Date.now()}`)
        
    })
  })  