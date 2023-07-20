/// <reference types = "Cypress"/>
describe("Weather API Test Suite", function () {
  it("Get Weather Information For cities", function () {
    cy.request({
      method: "GET",
      url: "https://www.metaweather.com/api/location/search/?query=san",
    })
      .then((resp) => {
        const city = resp.body[0].title;
        return city;
      })
      .then(function (city) {
        cy.request({
          method: "GET",
          url: "https://www.metaweather.com/api/location/search/?query=" + city,
        }).then((resp) => {
          expect(resp.body[0]).has.property("title", city);
        });
      });
  });

  it.only("Get Weather Information For All cities", function () {
    cy.request({
      method: "GET",
      url: "https://www.metaweather.com/api/location/search/?query=san",
    })
      .then((resp) => {
        const location = resp.body;
        return location;
      })
      .then(function (location) {
        for (let i = 0; i < location.length; i++)
          cy.request({
            method: "GET",
            url:
              "https://www.metaweather.com/api/location/search/?query=" +
              location[i].title,
          }).then((resp) => {
            expect(resp.body[0]).has.property("title", location[i].title);
          });
      });
  });
});
