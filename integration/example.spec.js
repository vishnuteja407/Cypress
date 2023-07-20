describe("Test suite", function () {
  it("Test case", () => {
    cy.visit("https://admin-demo.nopcommerce.com/login");
    cy.get("input[name=Email]").clear().type("admin@yourstore.com");
    cy.get("#Password").clear().type("admin");
    cy.get("button[type=submit]").click();
    cy.title().should("eq", "Dashboard / nopCommerce administration");
  });
});
