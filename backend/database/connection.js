const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config()

// A connection function allowing access to the database

connectDB = () =>
    mongoose.connect(process.env.mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((db) =>
        console.log(`Successful db connection: ${db.connections[0].name}`)
    )
    .catch((connectErr) =>
        console.error(`Error while connecting to db: ${connectErr}`)
    );

// Disconnect function that cleanly seperates the connection from the database

disconnectDB = () =>
    process.on("SIGINT", () => {
        mongoose.connection.close()
        .then(() => 
        process.exit(0, console.log(' MongoDB disconnected'))
        )
        .catch((err) => 
        console.error(`Error while disconnecting from db: ${err}`)
        );
    });

module.exports = { connectDB, disconnectDB };