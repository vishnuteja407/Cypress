///<reference types="cypress"/>
describe("Register", () => {
  it("Checkboxes", () => {
    cy.visit("http://demo.automationtesting.in/Register.html");

    cy.get("#checkbox1")
      .check()
      .should("be.checked")
      .and("have.value", "Cricket");
    cy.get("#checkbox2")
      .check()
      .should("be.checked")
      .should("have.value", "Movies");
    cy.get("#checkbox3")
      .check()
      .should("be.checked")
      .should("have.value", "Hockey");

    cy.get("#checkbox3").uncheck().should("not.be.checked");
    cy.get("#checkbox2").uncheck().should("not.be.checked");
    cy.get("#checkbox1").uncheck().should("not.be.checked");

    cy.get("[type='checkbox']").check(["Cricket", "Hockey"]);
  });

  it("Skills Dropdown", () => {
    cy.get("#Skills").select("Android").should("have.value", "Android");
  });
  it("Languages Multi select", () => {
    cy.get("#msdd").click();
    cy.get(".ui-corner-all").contains("English").click();
    cy.get(".ui-corner-all").contains("Bulgarian").click();
  });

  it("Select countries searchable dropdown", () => {
    cy.get("[role=combobox]").click({ force: true });
    cy.get(".select2-search__field").type("India").type("{enter}");
  });
});
