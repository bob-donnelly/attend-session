// Impporting mongoose and Schema from mongoose
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const activitiesSchema = new Schema({
});

module.exports = mongoose.model('Activities', activitiesSchema);