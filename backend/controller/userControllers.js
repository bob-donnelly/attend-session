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
    };
};

// function to get one user from MongoDB by id
const getUserById = async (req, res) => { 

    // Awaiting user by id
    const user = await Users.findById(req.params.id);

    // If user is found in MongoDB return user, if not returns a message
    if(user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    };
};

const registration = async (req, res) => {

    /* 
        userName, email, password groupName, firstName, lastName, and admin 
        are in the request body to be sent to the database
    */

    const { userName, email, password, groupName, firstName, lastName, admin } = req.body

    // Function checks that the user email does not already exist

    const userExists = await Users.findOne({ email });

    // An if statement that returns a message if user exists already

    if(userExists) {
        res.status(404).json({message: "User already exists."});
    } else {

        /* 
            User is created with a mongoose create function and it waits for the user model for the template 
            then if the arguments are correct i.e., fulfil the requirments of the schema it will create the new user   
        */
        const user = await Users.create({ 
            userName,
            email,
            password,
            groupName, 
            firstName, 
            lastName, 
            admin
        });

        /* 
            If User is created the user will respond with the user data if it is not created 
            it will respond with server error
        */
        if(user) {
            res.json({
                _id: user._id,
                userName: user.userName,
                email: user.email,
                password: user.password,
                groupName: user.groupName,
                firstName: user.firstName,
                lastName: user.lastName,
                admin: user.admin
            });
        } else {
            res.status(404).json({ message: "Server error." });
        };
    };
};

// Exporting functions to be used in routes
module.exports = {
    getAllUsers,
    getUserById,
    registration
}