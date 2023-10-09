// Importing express router to be used
const router = require('express').Router();

// Controllers that we need to create routes
const {
    getAllActivities
} = require('../controller/adminControllers');

// Routes for activities
router.route('/activities')
    .get(getAllActivities)

module.exports = router;