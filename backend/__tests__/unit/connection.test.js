// Importing the database connection functions
const { connectDB, disconnectDB } = require('../../database/connection')

// Grouping the tests
describe('Testing database connection', () => { 
    // Arranging the connection test
    test('connect', () => {

        // Mocking the function
        const db = jest.fn(() => connectDB)

        // Act or action to be done
        db(console.log('Connection tested'))

        // Assertion that the db will be called
        expect(db).toBeCalled();
    });
    
    // Arranging the disconnection test
    test('Testing database discconection', () => {
        // Mocking the disconnectDB function
        const db = jest.fn(() => disconnectDB)
        // Act to be done
        db(console.log('Disconnection tested'))
        // Assert that the db will be called
        expect(db).toBeCalled();
    });
});
