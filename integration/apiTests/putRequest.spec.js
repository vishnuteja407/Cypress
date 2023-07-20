/// <reference types="Cypress"/>
const data = require("../../fixtures/updateUser.json");
let accessToken =
  "c0185a87cbfcc27f397631eb8bf472b237edb8a7b7081233870671c21b261414";
describe("Put Test Suite", function () {
  it("Testing Put Request", function () {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v1/users",
      headers: {
        authorization: "Bearer " + accessToken,
      },
      body: {
        name: data.name,
        gender: data.gender,
        email: data.email,
        status: data.status,
      },
    }).then(function (resp) {
      const id = resp.body.data.id;
      cy.fixture("putRequestData").then((payload) => {
        cy.request({
          method: "PUT",
          url: "https://gorest.co.in/public/v1/users/" + id,
          headers: {
            authorization: "Bearer " + accessToken,
          },
          body: {
            name: payload.name,
            email: payload.email,
          },
        }).then((resp) => {
          expect(resp.status).to.equal(200);
          expect(resp.body.data).has.property("id", id);
          expect(resp.body.data).has.property("name", payload.name);
          expect(resp.body.data).has.property("email", payload.email);
          cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v1/users/" + id,
            headers: {
              authorization: "Bearer " + accessToken,
            },
          }).then((resp) => {
            expect(resp.status).to.eq(200);
            expect(resp.body.data).has.property("id", id);
            expect(resp.body.data).has.property("name", payload.name);
            expect(resp.body.data).has.property("email", payload.email);
            cy.request({
              method: "DELETE",
              url: "https://gorest.co.in/public/v1/users/" + id,
              headers: {
                authorization: "Bearer " + accessToken,
              },
            }).then((resp) => {
              expect(resp.status).to.eq(204);
              //   cy.request({
              //     method: "GET",
              //     url: "https://gorest.co.in/public/v1/users/" + id,
              //     headers: {
              //       authorization: "Bearer " + accessToken,
              //     },
              //   }).then((resp) => {
              //     cy.log(JSON.stringify(resp));
              //     expect(resp.status).to.eq(404);
              //     expect(resp.body.data).has.property(
              //       "message",
              //       "Resource not found"
              //     );
              //   });
            });
          });
        });
      });
    });
  });
});
