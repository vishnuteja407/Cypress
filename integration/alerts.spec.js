///<reference types="cypress"/>

describe("Test suite", () => {
  it("Alerts", () => {
    // cy.visit("https://www.google.com/intl/en-GB/gmail/about/#inbox");
    // cy.get(".header__aside__buttons > .button--medium").click();
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.get("#HTML9 > .widget-content > button").click();

    // cy.on("window:alert", (str) => {
    //   expect(str).to.eq();
    // });
    cy.on("window:confirm", (str) => {
      expect(str).to.eq("Press a button!");
    });
    cy.get("#speed").select("Medium").should("have.value", "Medium");
    cy.get("#q26 > table > tbody > tr:nth-child(1) > td > label").check("Male");
    //  cy.get("[for=RESULT_CheckBox-8_0]", { timeout: 60000 });
  });
});
