// importing request from supertest for testing routes
const request = require('supertest');

// Importing the database
const { connectDB, disconnectDB } = require('../../database/connection');

// Importing app to be tested
const app = require('../../app/app');

// User data to be send in registration test
const user = {
    userName: "Jim",
    email: "test@test43229.com",
    password: "differentpassword2",
    groupName: "Activity name here2",
    firstName: "Baker2",
    lastName: "Smith2",
    admin: true
};

const updateAllUserFields = {
    userName: "Jimmiest21211",
    email: "test@test4031112.com",
    password: "differentpasswords31222",
    groupName: "Activity name here31222",
    firstName: "BakersDozens31222",
    lastName: "Smithy31222"
};

const missingUpdateFields = {
    groupName: "Activity name here3121",
    firstName: "BakersDozen3121",
    lastName: "Smithiest3121"
};

const invalidUpdateField = {
    lastName: "Janjusevic"
};

// Login information to be sent in login test
const login = {
    email: "test@test2.com",
    password: "differentpassword"
};

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

    test('The user should be registered', async () => {

        // Spread operator to iterate through the object so it sends to the database correctly
        const response = await request(app).post("/user/signup").send({...user});

        expect(response.statusCode).toBe(200);
    });

    test('The user should be logged in', async () => {

        // Spread operator to iterate through the object so it sends to the database correctly
        const response = await request(app).post("/user/login").send({...login});

        expect(response.statusCode).toBe(200);
    });

    test('The user should be updated when all fields are changed', async () => {
        const response = await request(app).patch("/user/update/64cc6e90db7249ae1676c600").send({...updateAllUserFields});

        expect(response.statusCode).toBe(200);

    });

    test('Partial submission should result in details being updated', async () => {
        const response = await request(app).patch("/user/update/64cc6f0a54ab61ecbf03f9ea").send({...missingUpdateFields }); response

        expect(response.statusCode).toBe(200);
    });
    
    test('Having any field be the same should result in 404', async () => {
        const response = await request(app).patch("/user/update/64cc6f0b54ab61ecbf03f9ec").send({...invalidUpdateField }); response

        expect(response.statusCode).toBe(404);
    });

    test('Should return all activities in the database', async () => {
        const response = await request(app).get("/admin/activities");

        expect(response.statusCode).toBe(200);
    });
});