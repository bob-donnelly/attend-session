// Importing express router to be used
const router = require('express').Router();

// Controllers that we need to create routes
const {
    getAllUsers,
    getUserById,
    registration,
    login
} = require('../controller/userControllers');

// Routes for admins
router
    .route('/admin')
    .get(getAllUsers)

// Routes for users
router
    .route('/account/:id')
    .get(getUserById)

// Routes for creating a user
router
    .route('/signup')
    .post(registration)

// Route for logging in
router.
    route('/login')
    .post(login)

// Exports all routers as router
module.exports = router;