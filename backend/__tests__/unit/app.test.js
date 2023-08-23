// importing request from supertest for testing routes
const request = require('supertest');

// Importing the database
const { connectDB, disconnectDB } = require('../../database/connection');

// Importing app to be tested
const app = require('../../app/app');

// Before each tests await database connection for a blank test
beforeEach(async () => {
    await connectDB();
});

// After each test disconnect the database for a blank test
afterEach(async () => {
    await disconnectDB();
});

// Describing the grouped tests
describe("Testing routes", () => {

    // Describing the current test and Arranging it
    test("the GET method should return all", async () => {

        // Act to be tested
        const response = await request(app).get("/user/admin");

        // Assert and repsonse 
        expect(response.statusCode).toBe(200);

        console.log(response.statusCode);
    });

    test('the GET method should return by Id', async () => {
        const response = await request(app).get("/user/account/64d02b63cf47708753b33f62");
        expect(response.statusCode).toBe(200);

        console.log(response.statusCode);
    });

    test('the GET by Id method should return 404', async () => {
        const response = await request(app).get("/user/account/64d02b63cf47708753b33f60");
        expect(response.statusCode).toBe(404);

        console.log(response.statusCode);
    });

    test('the GET all method should return 404', async () => {
        const response = await request(app).get("/user/admins");
        expect(response.statusCode).toBe(404);

        console.log(response.statusCode);
    });
});