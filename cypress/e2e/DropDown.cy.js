
/// <reference types="Cypress" />
describe("Handle Dropdowns",()=>{
    it.skip("Dropdown select",()=>{
        cy.visit("https://practice.cydeo.com/dropdown")
        cy.get("#dropdown").select("Option 1").should('have.value','1')

    })
   
})