const mongoose = require('mongoose');
const config = require('./config/config');

async function connectToDatabase() {
    try {
        // Updated options for MongoDB connection
        await mongoose.connect(config.mongoDBUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.info(`[${new Date().toISOString()}] MongoDB connected successfully.`);
    } catch (error) {
        console.error(`[${new Date().toISOString()}] MongoDB connection failed: ${error.message}`);
        process.exit(1); // Exit the process on connection failure
    }
}

connectToDatabase();

module.exports = mongoose; // Export Mongoose instance
