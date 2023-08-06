// Importing controllers to be tested
const {
    getAllUsers,
    getUserById, 
} = require('../../controller/userControllers');

// Importing connect and disconnect functions to connect to the database 
const { connectDB, disconnectDB } = require('../../database/connection');

const Users = require('../../model/userModel')

// Before each tests await database connection for a blank test
beforeEach(async () => {
    await connectDB();
});

// After each rest disconnect the database for a blank test
afterEach(async () => {
    await disconnectDB();
});

// Grouping tests by GET
describe('should test all GET requests', () => {

    // Aranges the test
    test('should get all users', async () => {

        // Actions to be done
        const getAll = await getAllUsers();
        
        // Function to compare the controller against that does the same thing
        const sanityCheck = await Users.find({ })

        // Aserts that all users are found
        expect(getAll.length).toBe(sanityCheck.length);

        // Allows developer to easily check if tests are passing without getting data from MongoDB
        console.log(getAll)
    });

    // Arranges the test
    test('should get user by id', async () => {

        // Actions to be done
        const getUser = await getUserById('64cc6f0b54ab61ecbf03f9ec')

        // Asserts that the user is found by _id
        expect(getUser._id).toBeDefined();
        
        // Allows developer to easily check if tests are passing without getting data from MongoDB
        console.log(getUser)
    });
});