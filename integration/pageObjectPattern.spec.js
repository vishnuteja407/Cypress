import LoginPage from "../integration/pageObjects/LoginPage";
describe("Test suite", function () {
  it("Login Test", function () {
    const login = new LoginPage();
    login.visit();
    login.fillEmail("admin@yourstore.com");
    login.fillPassword("admin");
    login.clickButton();
    cy.title().should("be.equal", "Dashboard / nopCommerce administration");
  });
});
