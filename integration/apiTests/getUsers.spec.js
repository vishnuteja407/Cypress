/// <reference types="cypress"/>

let accessToken =
  "12d6172c7ccf1a27454b0e03f9f7bd9e2831d13eb99d63945125e184989897d3";
describe("Test suite", () => {
  it("Get users", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v1/users",
      headers: {
        authorization: "Bearer " + accessToken,
      },
    }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.meta.pagination.limit).to.eq(20);
    });
  });
  it("Get users by id", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v1/users/2",
      headers: {
        authorization: "Bearer " + accessToken,
      },
    }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.data.email).to.eq("damomca@gmail.com");
    });
  });
});
