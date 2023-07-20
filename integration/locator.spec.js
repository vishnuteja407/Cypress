describe("Locator test suite", () => {
  it("Visit the URL", () => {
    cy.visit("https://demo.nopcommerce.com/");
  });
  it("Adding items to shopping cart", () => {
    cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch");
    cy.get("[type='submit']").click();
    cy.get(".product-box-add-to-cart-button").click();
    cy.wait(4000);
    cy.get("#product_enteredQuantity_4").clear();
    cy.get("#product_enteredQuantity_4").type("4");
    cy.get("#add-to-cart-button-4").click();
    cy.wait(4000);
    cy.get("#topcartlink > a > span.cart-label").click();
    cy.wait(3000);
    cy.get(".product-subtotal").contains("$7,200.00");
  });
});
