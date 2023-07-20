///<reference types="cypress"/>

describe("Test suite", () => {
  it("Table test case", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    //check value presence anywhere in the table
    cy.get("table[name=BookTable]")
      .contains("td", "Learn Selenium")
      .should("be.visible");
    // check value presence in a specific row and column
    cy.get("table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)")
      .contains("Selenium")
      .should("be.visible");
    // Verify bok name "Master in Java" whose author is Amod
    cy.get("table[name=BookTable]>tbody>tr td:nth-child(2)").each(
      ($e, index, $list) => {
        const text = $e.text();
        if (text.includes("Amod")) {
          cy.get("table[name=BookTable]>tbody>tr td:nth-child(1)")
            .eq(index)
            .then(function (bName) {
              const bookName = bName.text();
              expect(bookName).to.eq("Master In Java");
            });
        }
      }
    );
  });
});
