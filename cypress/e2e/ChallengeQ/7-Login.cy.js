


describe('Login', function() 
{
   it('Unregistered User', function()
   
   {
    cy.visit("https://demoqa.com/login")
    cy.get('#userName').type("Morita")
    cy.get('#password').type("32412133")
    cy.get('#login').click()
    cy.get('#name').then(function(textAssert)
    {
    expect(textAssert).to.have.text('Invalid username or password!')
    })


    
   })

  })