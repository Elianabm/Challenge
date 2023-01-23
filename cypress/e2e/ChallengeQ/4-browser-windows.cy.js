describe('Complete Form', function() 
{
  
  it('New Tab', function()
   
   {
    cy.visit("https://demoqa.com/browser-windows")
    cy.get('#tabButton').invoke('removeAttr', 'target').click()
    cy.url().should('include', '/sample')
    cy.get('#sampleHeading').should('have.text', 'This is a sample page')
   
    })


    it('New Window', function()
   
    {
     cy.visit("https://demoqa.com/browser-windows")
     cy.get('#windowButton').click()
    
    
     })

    it('New Window Message', function()
   
    {
     cy.visit("https://demoqa.com/browser-windows")
     cy.get('#messageWindowButton').click()
     cy.get('@popup').should("be called")
     cy.get('#sampleHeading').should('have.text', 'This is a sample page')
    
     })
      
})