/// <reference types="Cypress" />
describe("Alerts",()=>{
it("Alert Test",()=>{
        cy.visit("https://practice.cydeo.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        cy.on("window:alert",(t)=>{
            expect(t).to.contains("I am a JS Alert")
        })
    })
it("ConfirmAlert",()=>{
        cy.visit("https://practice.cydeo.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on("window:confirm", (alert) => {
           expect(alert).to.contains("I am a JS Confirm")
           
        })
       
        })
it("Cancel click",()=>{
        cy.visit("https://practice.cydeo.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on("window:confirm",()=>false)
})

it.only("Prompt alert",()=>{
         cy.visit("https://practice.cydeo.com/javascript_alerts")
         cy.window().then((win)=>{
            cy.stub(win,"prompt").returns("London")
            
         })
         cy.get("button[onclick='jsPrompt()']").click()
         
    })
        
})
