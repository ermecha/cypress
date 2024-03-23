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
         cy.get("img[alt='company-branding']").should("be.visible")
    })
})