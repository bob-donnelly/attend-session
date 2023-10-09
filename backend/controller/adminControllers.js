// Importing the activity model to be used in the controllers
const Activities = require('../model/activityModel');

// Shows all activites in the database
const getAllActivities = async (req, res) => {

    // Finds all activites by awaiting a find all search signified by empty braces
    const activities = await Activities.find({ });

    // If there activities variable finds activities send the activities if not return 404
    if(activities) {
        res.status(200).json(activities);
    } else {
        res.status(404).json({ message: "No activities found." });
    }
};

module.exports = {
    getAllActivities
};