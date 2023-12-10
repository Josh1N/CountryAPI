const request = require('supertest');
const app = require('../app.js');
const mongoose = require('mongoose');
const dbConnection = require('../config.js').db;

// Connecting to the database before each test
beforeEach(async () => {
    await mongoose.connect(dbConnection.MONGODB_URI);
  }, 10000);
  
// Closing database connection after each test
afterEach(async () => {
await mongoose.connection.close();
}, 10000);

describe("POST /countries", () => {
    it("returns status code 200 if country data passed is valid", async () => {
        const response = await request(app).post('/countries').send({
            name: "CountryName",
            alpha2code: "a2",
            alpha3code: "a3c",
            currency: "currency",
            currencyCode: "C"
        }, 7000);
        expect(response.statusCode).toBe(200)
    });
    
    it("returns status code 500 if country empty data passed", async () => {
        const response = await request(app).post('/countries').send({
            name: "",
            alpha2code: "",
            alpha3code: "",
            currency: "",
            currencyCode: ""
        });
        expect(response.statusCode).toBe(500);
    });
});

describe("GET /countries", () => {
    it("returns countries", async () => {
        const response = await request(app).get('/countries');
        expect(response.statusCode).toBe(200)
        expect(response.body.length).toBeGreaterThan(0);
    }, 10000);
});

describe("GET /countries/:alpha2Code", () => {
    it("returns a country for given alpha2Code", async () => {
      const response = await request(app).get("/countries/a2");
      expect(response.statusCode).toBe(200);
    }, 10000);
  });

describe("DELETE /countries/:name", () => {
    it("should delete a country successfully", async () => {
        const response = await request(app).delete("/countries/CountryName");
        expect(response.statusCode).toBe(200)
    });

    it("returns status code 500 if country failed to delete", async () => {
        const response = await request(app).delete("/countries/InvalidCountryName");
        expect(response.statusCode).toBe(500)
    });
});

describe("PUT /countries", () => {
    it("returns status code 200 if country updated successfully", async () => {
        const response = await request(app).put("/countries/6574699412d47ad172213a81")
        .send({
          name: "NewCountryName",
        }, 10000);
        expect(response.statusCode).toBe(200);
    });
    
    it("returns status code 500 if country doesn't exist", async () => {
        const response = await request(app).put("/countries/1234randomId")
        .send({
          name: "NewCountryName",
        });
        expect(response.statusCode).toBe(500);
    });
});