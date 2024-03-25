/// <reference types="Cypress" />

describe("Handle Tab",()=>{
    it("Tabs",()=>{
      cy.visit("https://practice.cydeo.com/windows")
      cy.get("a[href='/windows/new']").invoke("removeAttr","target").click()
      cy.wait(5000)
      cy.go("back")
    })
    it.only("href",()=>{
        cy.visit("https://practice.cydeo.com/windows/new")
    })
})