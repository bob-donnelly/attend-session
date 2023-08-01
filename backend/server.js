// Improting https module for createServer
const https = require('https');

// Imports the app module so we can use it within the server
const app = require('./app/app');

const { connectDB, disconnectDB } = require('./database/connection');

// imports dotenv module
const dotenv = require('dotenv');

// Configures dotenv module to allow us to use the port from .env in a variable
dotenv.config()
const port = process.env.port || 7000;

// Function for starting the server
Server = () => {
    // Private Server creation method 
    this.run = https.createServer(app).listen(port, console.log(`Server running on port 6000`));

    // Database connection function
    connectDB();

    // Database disconnect function

    disconnectDB();
}

// Runs the server
Server();

// Exporting the module for use in tests
module.exports = Server;