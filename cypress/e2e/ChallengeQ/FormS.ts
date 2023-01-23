class FormPage {
    
    getDOB(){
        return cy.get('#dateOfBirthInput')
    }
    getMonth(){
        return cy.get('.react-datepicker__month-select')
    }
    getYear(){
        return cy.get('.react-datepicker__year-select')
    }
    getDate(){
        return cy.get('.react-datepicker__day--012')
    }
    getSubject(){
        return cy.get('.subjects-auto-complete__value-container')
    }
    getHobbies(){
        return cy.get('input[type="checkbox"]')
    }
    getUploadPicture(){
        return cy.get('#uploadPicture')
    }
    getSubmitForm(){
        return cy.get('#submit')
    }
    getCloseForm(){
        return cy.get('#closeLargeModal')
    }
    
}

export default FormPage;
