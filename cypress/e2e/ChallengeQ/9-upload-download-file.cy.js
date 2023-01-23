
describe('Download and upload a file', function() 
{

it('Upload file', () => {
    cy.visit("https://demoqa.com/upload-download")
    cy.get('#uploadFile').click()
    cy.get('#uploadFile').selectFile('C:/Imagen/Test.txt')

})

it('Download file', () => {
    cy.get('#downloadButton').click()

})
})