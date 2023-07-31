// Improting https module for createServer
const https = require('https');

// Jest mocks prefer objects and constructors, we need to use classes
class Server {
    
    // Constructor method for starting the server
    startServer() {
        // Server creation method
            this.run = https.createServer().listen(5000, console.log(`Server running on port 5000`));
        }
    }

// Runs the server
const run = new Server();

// Exporting the module for use in tests
module.exports = Server;