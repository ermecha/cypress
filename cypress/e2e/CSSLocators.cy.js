describe("CSSLocators", () => {
    it("csslocators", () => {
        cy.visit("https://google.com")
        cy.get("#APjFqb").type("Cars{enter}")
    // cy.get("div[class='FPdoLc lJ9FBc']").click()
        cy.get("#result-stats").contains("About")

    })


})