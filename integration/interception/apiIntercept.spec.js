describe("Interception Test Suite", function () {
  it("Intercept Test Case", function () {
    cy.visit("https://jsonplaceholder.typicode.com/");
    cy.intercept({
      path: "/posts",
    }).as("posts");
    cy.get("table:nth-of-type(1) a[href='/posts']").click();
    cy.wait("@posts").then(function (inter) {
      cy.log(JSON.stringify(inter));
      expect(inter.response.body).to.have.length(100);
    });
  });
  it("Mocking with intercept test with static response", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");
    cy.intercept("GET", "/posts", { totalPosts: 5 }).as("posts");
    cy.get("table:nth-of-type(1) a[href='/posts']").click();
    cy.wait("@posts").then(function (inter) {
      cy.log(JSON.stringify(inter));
      cy.exec(`echo ${JSON.stringify(inter)} >cypress/fixtures/comment.json`);
      console.log(JSON.stringify(inter));
    });
  });
  it("Mocking with intercept test with dynamic fixture", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");
    cy.intercept("GET", "/posts", { fixture: "updateUser.json" }).as("posts");
    cy.get("table:nth-of-type(1) a[href='/posts']").click();
    cy.wait("@posts").then(function (inter) {
      cy.log(JSON.stringify(inter));
      console.log(JSON.stringify(inter));
    });
  });
  it.only("VM Login", () => {
    cy.request({
      method: "POST",
      url: "https://10.122.32.87:9091/bpa/api/v1.0/login",
      auth: {
        username: "admin",
        password: "admin",
      },
    })
      .its("status")
      .should("eq", 200);
  });
});
