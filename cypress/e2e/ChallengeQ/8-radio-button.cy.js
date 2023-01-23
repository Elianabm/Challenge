

describe('Select radiobuttom', function() 
   
   {
    it('Check radio button', () => {
        cy.visit("https://demoqa.com/radio-button")
        cy.get("#item-2").click();
        cy.xpath("//label[contains(text(),'Yes')]").click();
        cy.get(".mt-3").contains("Yes");
        cy.xpath("//label[contains(text(),'Impressive')]").click();
        cy.get(".mt-3").contains("Impressive");
    
    })
  
   })

