/// <require types = "Cypress"/>
// const dataJson = require("../../fixtures/updateUser.json");
describe("Test suite", function () {
  let accessToken =
    "c0185a87cbfcc27f397631eb8bf472b237edb8a7b7081233870671c21b261414";
  let randomText = "",
    textEmail = "";
  before(function () {
    cy.fixture("updateUser").then(function (dataJson) {
      this.dataJson = dataJson;
    });
  });
  it("Post test case", function () {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 10; i++)
      randomText += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    textEmail = randomText + "@gmail.com";
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v1/users",
      headers: {
        authorization: "Bearer " + accessToken,
      },
      body: {
        name: this.dataJson.name,
        gender: this.dataJson.gender,
        email: textEmail,
        status: this.dataJson.status,
      },
    })
      .then((res) => {
        cy.log(JSON.stringify(res));
        expect(res.status).to.eq(201);
        expect(res.body.data).has.property("id");
        expect(res.body.data).has.property("email", textEmail);
      })
      .then((resp) => {
        const userID = resp.body.data.id;
        cy.request({
          method: "GET",
          url: "https://gorest.co.in/public/v1/users/" + userID,
          headers: {
            authorization: "Bearer " + accessToken,
          },
        }).then((resp) => {
          expect(resp.status).to.eq(200);
          expect(resp.body.data).has.property("email", textEmail);
          expect(resp.body.data).has.property("name", this.dataJson.name);
        });
      });
  });
});
