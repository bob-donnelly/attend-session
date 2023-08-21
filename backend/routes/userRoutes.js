// Importing express router to be used
const router = require('express').Router();

// // Controllers that we need to create routes
// const {
//     getAllUsers,
//     getUserById
// } = require('../controller/userControllers');

router.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});

router.get("/admin", (req, res) => {
    res.status(200).send("Hello Admin!");
});
// // Routes for admins
// router
//     .route('/admin')
//     .get(getAllUsers)

// // Routes for users
// router
//     .route('/account')
//     .get(getUserById)

// Exports all routers as router
module.exports = router;