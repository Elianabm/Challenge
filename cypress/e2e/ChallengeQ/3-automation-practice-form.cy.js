import FormPage from './FormS'

describe('Complete Student Registration Form', function() 
{
   it('Input valid values', function()
   
   {
    
    const formPage=new FormPage()
    cy.visit("https://demoqa.com")
    cy.get('.category-cards > :nth-child(2)').click()
    cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()
    cy.get('#firstName').type("Eliana Beatriz")
    cy.get('#lastName').type("Moreno")
    cy.get('#userEmail').type("elianabm@gmail.com")
    cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click()
    cy.get('#userNumber').type("3815202020")
       
    formPage.getDOB().click()
    formPage.getMonth().select('February')
    formPage.getYear().select('1986')
    formPage.getDate().click()
    formPage.getSubject().type('Biology')
    formPage.getHobbies().check('1',{force: true})
    formPage.getUploadPicture().selectFile('C:/Imagen/Test.txt')

    cy.xpath('//*[@id="currentAddress"]').type('Tucuman 22')

  
    formPage.getSubmitForm().click({force: true})
    formPage.getCloseForm().click({force:true})     
  
     
})
})