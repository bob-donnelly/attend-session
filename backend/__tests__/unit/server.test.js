/*
    Importing the Server function into the test file
    Jest automatically mocks the function by default
*/
const Server = require('../../server');

// Importing https tp use with createServer
const https = require('https');

// Explicitly mocking the https module with createServer and listen functions attached
jest.mock('https', () => ({
    createServer: jest.fn(() => ({ listen: jest.fn() })),
    })
);

// Grouping Server tests together with describe if more than one exist
describe('Server', () => {
    /* 
        Test states what it does in a string
        Arranges the test 
    */
    test('should create server on port 5000', () => {

        // Act to create a new Server instantiation of the class and call the method
        const server = new Server().startServer();

        // Assert the https.createServer mock is called
        expect(https.createServer).toBeCalled();
    });
});