// Importing users from userModel
const Users = require('../../model/userModel');

// Importing connect and disconnect functions to connect to the database 
const { connectDB, disconnectDB } = require('../../database/connection');

// Declaring user data to create a new user
const userData = {
    userName: "hjanjusevic0",
    email: "hjanjusevic0@hp.com",
    password: "passwordCouple",
    groupName: "White, Wuckert and Swift",
    firstName: "Hilario",
    lastName: "Janjusevic",
    admin: false
};

// Before each tests await database connection for a blank test
beforeEach(async () => {
    await connectDB();
});

// After each test disconnect the database for a blank test
afterEach(async () => {
    await disconnectDB();
});

// Grouping tests for userModel
describe('User Model tests', () => { 

    // Asynchronous test to await database functions
    test('Should create a user', async() => {
        
        // User user is equal to the Users Schema with userData loaded
        const user = Users(userData);

        // savedUser is equal to the user document in users collection
        const savedUser = await user.save();
        
        // Expecting the User data to be saved
        expect(savedUser._id).toBeDefined();
        expect(savedUser.userName).toBe(userData.userName);
        expect(savedUser.email).toBe(userData.email);
        expect(savedUser.password).not.toBe(userData.password);
        expect(savedUser.groupName).toBe(userData.groupName);
        expect(savedUser.firstName).toBe(userData.firstName);
        expect(savedUser.lastName).toBe(userData.lastName);
        expect(savedUser.admin).toBe(userData.admin);

        /*
            Logging that the userName from the user document in MongoDB to easily tell 
            the test runner is not passing everything
        */
        console.log(`Check if user is submitted: ${savedUser}`);
    });

    // Second aysnchrouns test in this group 
    test('Should save user and ignore extra fields', async() => {

        // Passing the userData with an extra field added to test if it will be ignored
        const userWithWrongField = Users({
            ...userData,
            name: "invalid"
        });

        // Awaiting the save to remote MongoDB
        const saveUserWithWrongField = await userWithWrongField.save();

        // Expecting the user to be saved and the extra field to be undefined
        expect(saveUserWithWrongField._id).toBeDefined();
        expect(saveUserWithWrongField.name).toBe(undefined);

        // Logging the entire document to check the invalid field is not saved
        console.log(`Stop invalid fields: ${saveUserWithWrongField}`);
    });
});