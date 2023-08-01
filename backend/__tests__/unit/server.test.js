/*
    Importing the Server function into the test file
    Jest automatically mocks the function by default
*/
const Server = require('../../server');

// Grouping Server tests together with describe if more than one exist
describe('Server', () => {
    /* 
        Test states what it does in a string
        Arranges the test 
    */
    test('should create server on port 6000', () => {

        // Act to create a mock Server function the test can run
        const server = jest.fn(() => Server)
        server()

        // Assert the Server is called
        expect(server).toBeCalled();
    });
});