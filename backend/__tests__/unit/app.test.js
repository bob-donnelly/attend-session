// importing request from supertest for testing routes
const request = require('supertest');

// Importing app to be tested
const app = require('../../app/app');

// Describing the grouped tests
describe("Testing routes", () => {

    // Describing the current test and Arranging it
    test("the GET method should return", async () => {

        // Act to be tested
        const response = await request(app).get("/");

        // Assert and repsonse 
        expect(response.statusCode).toBe(200)
    });
});