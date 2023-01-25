

describe('Tab Page Testing', () => {
  before(() => {
    cy.visit("https://demoqa.com/tabs")
  })

  it("Pick different tabs", () => {
   
    cy.get("#demo-tab-what").should('have.attr','aria-selected').then((value)=>{
        expect(value).equal('true')

     })
    
    cy.get("#demo-tab-origin").click().should('have.attr','aria-selected').then((value)=>{
        expect(value).equal('true')
    })

    cy.get("#demo-tab-use").click().should('have.attr','aria-selected').then((value)=>{
        expect(value).equal('true')
    })

  })


})
