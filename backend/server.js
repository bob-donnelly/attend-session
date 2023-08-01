// Improting https module for createServer
const https = require('https');
const app = require('./app/app');

// Jest mocks prefer objects and constructors, we need to use classes
class Server {
    
    // Constructor method for starting the server
    startServer() {
        // Server creation method
            this.run = https.createServer(app).listen(6000, console.log(`Server running on port 6000`));
        }
    }
// Runs the server
const run = new Server()
run.startServer();

// Exporting the module for use in tests
module.exports = Server;