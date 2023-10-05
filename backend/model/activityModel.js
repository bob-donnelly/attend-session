// Impporting mongoose and Schema from mongoose
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const activitiesSchema = new Schema({
    weeklyActivityName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
        locations: [{
            _id: false,
            hallName: {
            type: String,
            required: true
            },
            address: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            region: {
                type: String,
                required: true
            },
        }],
            days: [{
                type: String,
                required: true
            }],
            times: [{
                _id: false,
                startTime: {
                    type: String, 
                    required: true
                },
            endTime: {
                type: String,
                required: true
            }
        }],
    createdBy: {
        type: mongoose.ObjectId,
        ref: 'User',
        required: true
    },
    attendedBy: [{
        type: mongoose.ObjectId,
        ref: 'User',
        required: false
    }]
});

module.exports = mongoose.model('Activities', activitiesSchema);