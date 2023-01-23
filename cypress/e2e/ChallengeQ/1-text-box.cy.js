

describe('Complete Text Box', function() 
{
   it('Input valid values', function()
   
   {
    cy.visit("https://demoqa.com/text-box")
    cy.get('#userName').type("Morita Miley")
    cy.get('#userEmail').type("morita@gmail.com")
    cy.get('#currentAddress').type("9 de julio 22")
    cy.get('#permanentAddress').type("Buenos Aires 22")
    cy.get('#submit').click()
    cy.get('.border').should('be.visible')
  
   })

  })