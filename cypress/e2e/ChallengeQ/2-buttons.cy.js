describe('Buttons', function() 
{
   it('Input valid values', function()
   
   {
  
    cy.visit("https://demoqa.com/buttons")
    cy.contains('Double Click Me').dblclick()
    cy.contains('Right Click Me').rightclick()
    cy.xpath('//div[@class="mt-4"]//child::button [text()="Click Me"]').click()
    cy.xpath('//p [text()="You have done a dynamic click"]').then(function(textAssert)
    {
    expect(textAssert).to.have.text('You have done a dynamic click')
    })

   })
})