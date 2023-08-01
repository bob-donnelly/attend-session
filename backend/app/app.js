// Impoting express library to be used
const express = require('express');

// Creating the app
const app = express();

// Using the app to serve the routes 
app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
    console.log('test')
});

// Exporting the app module
module.exports = app;