// Importing user model to use in controllers
const Users = require('../model/userModel');

// function to get all users
const getAllUsers = async (req, res) => {

    // Await users from MongoDB
    const user = await Users.find({ });

    // If users are found in MongoDB return users, if not returns a message 
    if(user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'Users not found' });
    }
};

// function to get one user from MongoDB by id
const getUserById = async (req, res) => { 

    // Awaiting user by id
    const user = await Users.findOne({ _id: req.params._id });

    // If user is found in MongoDB return user, if not returns a message
    if(user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

// Exporting functions to be used in routes and tests
module.exports = {
    getAllUsers,
    getUserById
}