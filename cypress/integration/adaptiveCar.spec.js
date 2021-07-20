/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    // cy.clock()
    cy.visit('localhost:8081')
  })

  it('the first car will adjusts its speed when it approaches another car to avoid crashing', () => {
    cy.get('#car1speed').type('2')
    cy.get('#car2speed').type('1')
    cy.get('#car1update').click()
    cy.get('#car2update').click()
    cy.wait(6000)
    // cy.tick(6000)

    cy.get('#car1').then(($car1) => {
      cy.log("car1", $car1[0].getBoundingClientRect().left)
      cy.get('#car2').then(($car2) => {
        expect($car1[0].getBoundingClientRect().left).to.be.greaterThan($car2[0].getBoundingClientRect().left)
      })
    })
  })
})
