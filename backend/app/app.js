// Impoting express library to be used
const express = require('express');

// Importing routes from router module
const userRoutes = require('../routes/userRoutes')

// Creating the app
const app = express();

// Using json middleware from express
app.use(express.json())

// Using the app to serve the routes 
app.use("/user", userRoutes);

// Exporting the app module
module.exports = app;