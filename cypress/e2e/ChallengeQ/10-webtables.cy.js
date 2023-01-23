describe('Web table', () => {
    it('Add web tables', () => {
        cy.visit("https://demoqa.com/webtables")
        cy.get("#addNewRecordButton").click()
        cy.get("#firstName").type("Morita")
        cy.get("#lastName").type("Miley")
        cy.get("#userEmail").type("mora@gmail.com")
        cy.get("#age").type("36")
        cy.get("#salary").type("80000")
        cy.get("#department").type("Quality Assurance")
        cy.get("#submit").click()
    
    })
    it('Edit web tables', () => {
        cy.visit("https://demoqa.com/webtables")
        cy.get("[title=Edit]").eq(0).click()
        cy.get("#lastName").clear()
        cy.get("#lastName").type("Bluth")
        cy.get("#submit").click()
    
    })
})