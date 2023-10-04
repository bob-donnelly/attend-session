// Importing users from userModel
const Users = require('../../model/userModel');

const Activities = require('../../model/activityModel');

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

const activitiesData = {
    weeklyActivityName: "Bingo",
    locations: [{
        hallName: "Bingo Hall",
        address: "123 Bingo Street",
        city: "Bingo City",
        region: "Bingo Region"
    },
    {
        hallName: "Bingo Hall2",
        address: "1234 Bingo Street",
        city: "Bingo City",
        region: "Bingo Region",
    }],
    days: ["Tuesday", "Sunday"],
    times: [{
        startTime: "18:00",
        endTime: "21:00",
    },
{
    startTime: "08:00",
    endTime: "11:00",
}],
    createdBy: "5f9d7a3b7f8c3b1f5c1f8a5f",
    attendedBy: ["5f9d7a3b7f8c3b1f5c1f8a5f", "64cc6e90db7249ae1676c600", "64d022b4990fdc8b69468017"]
}

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

describe('Activity Model tests', () => { 

    test('Should save an activity', async() => {
        const activity = Activities(activitiesData);
        const savedActivity = await activity.save();

        expect(savedActivity._id).toBeDefined();
        expect(savedActivity.weeklyActivityName).toBe(activitiesData.weeklyActivityName);
        expect(savedActivity.locations[0].hallName).toBe(activitiesData.locations[0].hallName);
        expect(savedActivity.locations[0].address).toBe(activitiesData.locations[0].address);
        expect(savedActivity.locations[0].city).toBe(activitiesData.locations[0].city);
        expect(savedActivity.locations[0].region).toBe(activitiesData.locations[0].region);
        expect(savedActivity.locations[1].hallName).toBe(activitiesData.locations[1].hallName);
        expect(savedActivity.locations[1].address).toBe(activitiesData.locations[1].address);
        expect(savedActivity.locations[1].city).toBe(activitiesData.locations[1].city);
        expect(savedActivity.locations[1].region).toBe(activitiesData.locations[1].region);
        expect(savedActivity.days[0]).toBe(activitiesData.days[0]);
        expect(savedActivity.days[1]).toBe(activitiesData.days[1]);
        expect(savedActivity.times[0].startTime).toBe(activitiesData.times[0].startTime);
        expect(savedActivity.times[0].endTime).toBe(activitiesData.times[0].endTime);
        expect(savedActivity.times[1].startTime).toBe(activitiesData.times[1].startTime);
        expect(savedActivity.times[1].endTime).toBe(activitiesData.times[1].endTime);
        expect(savedActivity.createdBy).toBeDefined();
        expect(savedActivity.attendedBy[0]).toBeDefined();
        expect(savedActivity.attendedBy[1]).toBeDefined();
        expect(savedActivity.attendedBy[2]).toBeDefined();
    });
});
