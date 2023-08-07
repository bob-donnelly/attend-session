// Impporting mongoose and Schema from mongoose
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

// Importing bcrypt for password hashing and defining the salt rounds
const bcrypt = require('bcrypt');
const saltRounds = 10;

/*
    Creating the user collection that will hold the user data as documents
    All fields are required but admin is by default false
*/
const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    groupName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    }
});

/* 
    Before the userSchema is saved hash the passsword with bcrypt salt rounds
    Arrow functions change the state of user will refactor when I understand how
*/
userSchema.pre('save', function(next) {

    // Defines the user in this context
    const user = this;

    // Checks to see if the password is being modified or it is a new user
    if(user.isModified('password') || user.isNew) {

        // Gernerate the salt with how many rounds are needed
        bcrypt.genSalt(saltRounds, function(err, salt) {

            // if there is an error return next error or continue with an implicit else statement
            if(err) {
                return next(err);
            }

            // Create the hash with the salt
            bcrypt.hash(user.password, salt, function(err, hash) {

                // if there is an error return next error or continue with an implicit else statement
                if(err) {
                    return next(err);
                }
                
                // Tells mongoose the password is now the hash and to continue the middleware
                user.password = hash;
                next();
            });
        });
    }
});

// Use mongoose userSchema methods to use bcrypt to compare the password string with the stored hash
userSchema.methods.comparePassword = function(password, callback) {
    bcrypt.comparePassword(password, this.password, function(err, isMatch) {
        if(err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
}

module.exports = mongoose.model('User', userSchema);