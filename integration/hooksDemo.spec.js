///<reference types="cypress"/>

describe("Test suite", () => {
  before(() => {
    cy.log("************This is Test setup block");
  });
  after(() => {
    cy.log("************This is Test Teardown block************");
  });
  beforeEach(() => {
    cy.log("************This is Login block************");
  });
  afterEach(() => {
    cy.log("************This is Logout block************");
  });
  it("Searching", () => {
    cy.log("******** This is searching test************");
  });
  it("Advanced Searching", () => {
    cy.log("******** Advanced Searching************");
  });
  it("Listing Products", () => {
    cy.log("******** Listing Products************");
  });
});
