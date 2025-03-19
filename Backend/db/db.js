const mongoose = require('mongoose');
const dotenv = require('dotenv');

const port = 5000;

dotenv.config();

let isConnected = false; // Track connection status

const connectDB = async () => {
    if (isConnected) {
        console.log("🔹 Using existing MongoDB connection.");
        return;
    }

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        isConnected = true;
        console.log(`✅ MongoDB Connected: ${port}`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
