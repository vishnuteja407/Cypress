// describe("My First test suite", () => {
//   it("My first test case", function () {
//     cy.visit("https://example.cypress.io");
//     cy.pause();
//     cy.contains("type").click();
//     cy.url().should("include", "/commands/actions");
//     cy.get("#email1")
//       .type("fake@email.com")
//       .should("have.value", "fake@email.com");
//   });

//   //   it("My Second test case", () => {
//   //     expect(20).to.equal(20);
//   //   });
// });
// var userName = "admin";
// var pswd = "admin";
// describe("Post resource", () => {
// beforeEach(() => {
//   console.log("Successfully ran test cases");
// });
// it("My First Test case", () => {
//   cy.visit("/");
//   // cy.request("POST", "/login", { username: "admin", password: "admin" });
//   cy.get("#username").type(userName);
//   cy.get("#password").type(pswd);
//   cy.get("#loginButton").click();
//   cy.get(".mdl-layout--fixed-header").should("contain", (userName, pswd));
// });
//   beforeEach(() => {
//     console.log("Sucessfully executed test case");
//   });
//   let val1;
//   it("My First test case", () => {
//     cy.visit("/");
//     val1 = cy.get("div").find("tbody").get("td").its("length");
//     console.log(val1);
//   });
//   it("My second test case", () => {
//     cy.get("input[name='name']").type("Cricket ball");
//     cy.get("input[name='category']").type("Cricket");
//     cy.get("input[name='price']").type(20);
//     cy.get("button").click();
//   });
//   it("My Third test case", () => {
//     cy.get("tr").should("have.length", 7);
//     cy.get("div").find("tbody").get("tr").should("contain", "Cricket");
//     cy.get("div").find("tbody").get("tr").its("length").should("be.gt", 6);
//     // expect(val2).to.gt(val1);
//     // expect(7).to.be.greaterThan(6);
//     // cy.get(ELEMENT).invoke("text").then(parseFloat).should("be.gte", my_value);
//   });
// });

document.querySelector("input");
