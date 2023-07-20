describe("Test suite", () => {
  before(function () {
    cy.log("Test setup");
  });
  after(function () {
    cy.log("Test tear down");
  });
  beforeEach(function () {
    cy.log("Before each test case");
  });
  afterEach(function () {
    cy.log("After each test case");
  });

  it("Test case 1", () => {
    cy.log("Test case 1");
  });
  it("Test case 2", () => {
    cy.log("Test case 2");
  });
  it("Test case 3", () => {
    cy.log("Test case 3");
  });
});
