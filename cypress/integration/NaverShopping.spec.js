/* eslint-disable no-undef */
/// <reference types="Cypress" /

describe('네이버쇼핑', function() {

    it('Naver Shopping', function() {
      cy.visit('https://shopping.naver.com/home/p/index.nhn')
      cy.get('[_clickcode="search"]').as('searchButton') // 검색 버튼

      // 쿼리
      cy.get('#autocompleteWrapper > input')
        .first()
        .type('코로나')
      
      cy.get('@searchButton')
        .click()
      

      cy.screenshot(`${this.title}`)

    })

    it('search result', () => {
      cy.visit('https://search.shopping.naver.com/search/all.nhn?query=%EC%BD%94%EB%A1%9C%EB%82%98&cat_id=&frm=NVSHATC')
     
      cy.get('#_priceApplyButton').as('priceSearchButton') // 가격 검색 버튼

        cy.get('#_queryExplain > em')
        .invoke('text', '코로나')

      cy.get('[data-nclick-area="rcc*C"]')
        .click()

      cy.get('#_filter > div')
        .first()
        .should('have.class', 'on')

      const min_p = 4
      const max_p = 3

      cy.get('#min_p')
        .type(min_p)
      cy.get('#max_p')
        .type(max_p)

      cy.get('@priceSearchButton')
        .click()

      cy.get('[data-nclick-code="rcc.reset"]')
        .invoke('text', `${min_p<max_p?min_p: max_p} ~ ${min_p<max_p?max_p:min_p}`)

      cy.screenshot(`${this.title}`)
    })
  })  