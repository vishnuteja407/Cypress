/// <reference types="Cypress"/>
let access_token = "",
  user_id = "";
describe("Oauth Test Suite", function () {
  before("Generate token and get User ID Test", () => {
    cy.request({
      method: "POST",
      url: "http://coop.apps.symfonycasts.com/token",
      form: true,
      body: {
        client_id: "CypressTesting",
        client_secret: "d418829c943e1fe7c8db40b67fe3b939",
        grant_type: "client_credentials",
      },
    }).then((resp) => {
      cy.log(JSON.stringify(resp));
      access_token = resp.body.access_token;
      cy.request({
        method: "GET",
        url: "http://coop.apps.symfonycasts.com/api/me",
        headers: {
          authorization: "Bearer " + access_token,
        },
      }).then((resp) => {
        user_id = resp.body.id;
      });
    });
  });
  it("Unlock the Barn Test", () => {
    cy.request({
      method: "POST",
      url: "http://coop.apps.symfonycasts.com/api/" + user_id + "/barn-unlock",
      headers: {
        authorization: "Bearer " + access_token,
      },
    }).then((resp) => {
      cy.log(JSON.stringify(resp));
      expect(resp.status).to.eq(200);
      cy.exec(
        `echo ${JSON.stringify(resp.body)} >cypress/fixtures/comment.json`
      );
    });
  });
  it("Put the Toilet Seat Down", () => {
    cy.request({
      method: "POST",
      url:
        "http://coop.apps.symfonycasts.com/api/" + user_id + "/toiletseat-down",
      headers: {
        authorization: "Bearer " + access_token,
      },
    }).then((resp) => {
      cy.log(JSON.stringify(resp));
      expect(resp.status).to.eq(200);
    });
  });

  it("Feed Your Chickens Test", () => {
    cy.request({
      method: "POST",
      url:
        "http://coop.apps.symfonycasts.com/api/" + user_id + "/chickens-feed",
      headers: {
        authorization: "Bearer " + access_token,
      },
    }).then((resp) => {
      cy.log(JSON.stringify(resp));
      expect(resp.status).to.eq(200);
    });
  });

  it("Collect Eggs from Your Chickens Test", () => {
    cy.request({
      method: "POST",
      url: "http://coop.apps.symfonycasts.com/api/" + user_id + "/eggs-collect",
      headers: {
        authorization: "Bearer " + access_token,
      },
    }).then((resp) => {
      cy.log(JSON.stringify(resp));
      expect(resp.status).to.eq(200);
    });
  });

  it("Get the Number of Eggs Collected Today Test", () => {
    cy.request({
      method: "POST",
      url: "http://coop.apps.symfonycasts.com/api/" + user_id + "/eggs-count",
      headers: {
        authorization: "Bearer " + access_token,
      },
    }).then((resp) => {
      cy.log(JSON.stringify(resp));
      expect(resp.status).to.eq(200);
    });
  });
});
