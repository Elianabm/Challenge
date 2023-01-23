import { SelectablePage } from "./SelectablePage"


  describe('Testing List and Grid ', () => {
       
    const selectablePage = new SelectablePage()
  
    it("Select element from the list", () => {
        cy.visit("https://demoqa.com/selectable")
        selectablePage.selectListItem()
  
    })

    
    it("Click on several elements from the grid", () => {
        cy.visit("https://demoqa.com/selectable")
        selectablePage.selectGridItem()

  })
  
  })