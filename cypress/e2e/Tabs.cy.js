/// <reference types="Cypress" />

describe("Handle Tab",()=>{
    it("Tabs",()=>{
      cy.visit("https://practice.cydeo.com/windows")
      cy.get("a[href='/windows/new']").click()
    })
})