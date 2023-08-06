// Importing controllers to be tested
const {
    getAllUsers,
    getUserById, 
} = require('../../controller/userControllers');

// Importing connect and disconnect functions to connect to the database 
const { connectDB, disconnectDB } = require('../../database/connection');

// Before each tests await database connection for a blank test
beforeEach(async () => {
    await connectDB();
});

// After each rest disconnect the database for a blank test
afterEach(async () => {
    await disconnectDB();
});