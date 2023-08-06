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