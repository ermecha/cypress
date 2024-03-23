describe("Assetions demo", () => {
    it("Implicit assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.get("input[placeholder='Username']")
        // cy.url().
        // cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.url().should("contain", "web/index.php")
        // cy.url().should("include", "orangehrmlive.com")
        // .should("include", "orangehrmlive.com")
        // .should("contain", "web/index.php")
        cy.url().should("include", "orangehrmlive.com")
            .and("include", "orangehrmlive.com")
            .and("contain", "web/index.php")
        cy.title().should("contain", "Orange")
        cy.get("img[alt='company-branding']").should("be.visible").and("exist")
        cy.get("a").should("have.length", "5")
        cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin")
        cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").should("have.value", "Admin")
        cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin123{enter}")
    })
    it("Expect", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin")
        cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin123{enter}")
        let expName = "Bob Tester";
        cy.get(".oxd-userdropdown-name").then( (x)=>{
              let actualName=x.text()
             expect(actualName).to.equal(expName)
         })
      

    })
})