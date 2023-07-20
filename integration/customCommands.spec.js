describe("Test suite", function () {
  it("Login Test case", function () {
    cy.login("admin@yourstore.com", "admin");
    cy.title().should("eq", "Dashboard / nopCommerce administration");
    cy.login("admin@yourstore.com", "admin123");
    cy.title().should("not.be.equal", "Dashboard / nopCommerce administration");

    cy.login("admin@yourstore", "admin12");
    cy.title().should("be.equal", "Your store. Login");
  });
  it("Add Customer", function () {
    cy.login("admin@yourstore.com", "admin");
    cy.log("----------------Add Customer--------------------");
  });
  it("Edit Customer", function () {
    cy.login("admin@yourstore.com", "admin");
    cy.log("----------------Edit Customer--------------------");
  });
});
