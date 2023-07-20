describe("Test Suite", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("Fixture Demo Test", function () {
    cy.visit("https://admin-demo.nopcommerce.com/login");
    cy.get("input[name=Email]").clear().type(this.data.email);
    cy.get("#Password").clear().type(this.data.password);
    cy.get("input[type=checkbox]").check().should("be.checked");
    cy.get("button[type=submit]").click();
  });
});
