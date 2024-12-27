const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const locationRoutes = require("./routes");

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

// Use the routes
app.use("/", locationRoutes);

const connect = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

connect();

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});