describe('My First Test', () => {
    it('test1', () => {
        cy.visit("https://google.com")
        cy.title().should("eq", "Google")
    })
    it('test2', () => {
        cy.visit("https://google.com")
        cy.title().should("eq", "Googl")
    })
})
describe('My Second Test', () => {
    it('test1', () => {
        cy.visit("https://google.com")
        cy.title().should("eq", "Google")
    })
    it('test2', () => {
        cy.visit("https://google.com")
        cy.title().should("eq", "Googl")
    })
})