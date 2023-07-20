///<reference types="cypress"/>
describe("Web UI elements test suite", () => {
  it("Verify input box and redio buttons", () => {
    cy.visit("https://bpa-rhela.cisco.com:8443/console/");
    cy.url().should("include", "bpa-rhela");
    cy.get("#inputUsername")
      .should("be.visible")
      .should("be.enabled")
      .type("bpa");
    cy.get("#inputPassword")
      .should("be.visible")
      .should("be.enabled") //be.checked, not.be.checked
      .type("Cisc0123");
    cy.get("[type='submit']").click();
    cy.title().should("eq", "OpenShift Web Console");
    cy.get(".projects-view-all", { timeout: 60000 }).click();
    cy.get("#search-projects").should("be.visible").type("bpa-mavericks");
    cy.get(".dropdown-toggle")
      .should("be.visible")
      .get(":nth-child(2) > .sort-field")
      .click();
  });
});
