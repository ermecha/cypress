describe("Check UI",()=>{
    it("Check radiobuttons",()=>{
        cy.visit("https://practice.cydeo.com/checkboxes")
        cy.get("#box1")
        .check().should("be.checked")
        cy.get("form[id=checkboxes]").uncheck()


    })
}) 
