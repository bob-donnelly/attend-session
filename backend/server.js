// Improting https module for createServer
const https = require('https');

// Imports the app module so we can use it within the server
const app = require('./app/app');

// imports dotenv module
const dotenv = require('dotenv');

// Configures dotenv module to allow us to use the port from .env in a variable
dotenv.config()
const port = process.env.port || 7000;

// Jest mocks prefer objects and constructors, we need to use classes
class Server {
    
    // Method for starting the server
    startServer() {

        // Server creation method
            this.run = https.createServer(app).listen(port, console.log(`Server running on port 6000`));
        }
    }
// Runs the server
const run = new Server()
run.startServer();

// Exporting the module for use in tests
module.exports = Server;