describe("XPathLocators", () => {
    it("test1", () => {
        cy.visit("https://google.com")
        cy.get("//textarea[@id='APjFqb']").type("Jeans{enter}")
        cy.get("//div[@id='result-stats']").contains("About")

    })
})