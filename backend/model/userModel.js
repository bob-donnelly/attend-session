const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        requited: true
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

userSchema.pre('save', function(next) {
    user = this;
    if(user.isModified('password') || user.isNew) {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    }
});

userSchema.methods.comparePassword = (password, callback) => {
    bcrypt.comparePassword(password, this.password, (err, isMatch) => {
        if(err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
}

module.exports = mongoose.model('User', userSchema);