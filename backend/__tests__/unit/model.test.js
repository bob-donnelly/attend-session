const Users = require('../../model/userModel');
const { connectDB, disconnectDB } = require('../../database/connection');

const userData = {
    userName:"hjanjusevic0",
    email:"hjanjusevic0@hp.com",
    password:"passwordCouple",
    groupName:"White, Wuckert and Swift",
    firstName:"Hilario",
    lastName:"Janjusevic",
    admin:false
};

beforeAll(async () => {
    await connectDB()
});

afterEach(async () => {
    await disconnectDB();
})

describe('userModel tests', () => { 
    test('should create a user', async() => {
        const user = Users(userData);
        const savedUser = await user.save();
        expect(savedUser._id).toBeDefined();
        expect(savedUser.userName).toBe(userData.userName);
        expect(savedUser.email).toBe(userData.email);
        expect(savedUser.password).toBe(userData.password);
        expect(savedUser.groupName).toBe(userData.groupName);
        expect(savedUser.firstName).toBe(userData.firstName);
        expect(savedUser.lastName).toBe(userData.lastName);
        expect(savedUser.admin).toBe(userData.admin);

        console.log(savedUser.userName);
    });
});