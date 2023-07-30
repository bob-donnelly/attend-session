// Improting https modile for createServer
const https = require('https');

// Jest mocks prefer objects and constructors, we need to use classes
class Server {
    // Constructor method for starting the server
    startServer() {
        // Server creation method
            https.createServer().listen(8080, console.log('server'));
        }
    }

// Exporting the module for use in tests
module.exports = Server;