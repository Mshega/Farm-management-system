// Import the 'dotenv' module to load environment variables from a .env file
import dotenv from "dotenv";

// Load environment variables from the .env file into process.env
dotenv.config();

// Import the 'express' module and the 'Application' type from 'express'
import express, { Application } from "express";

// Import custom loader modules
import loaders from "./loaders";

// Import the function to get the port from the environment configuration
import { getPort } from "./config/env";

// Create an Express application instance
const app: Application = express();

// Immediately-invoked function expression (IIFE) to setup and start the server
(() => {
    // Initialize loaders with the Express app instance
    loaders(app);

    // Serve static files from the 'public' directory
    app.use(express.static('public'));

    // Start the server and listen on the port specified in the environment variables
    app.listen(getPort(), () => {
        // Log a message to the console indicating the server is running and the port it's listening on
        console.log(`Running on port: ${getPort()}`);
    });
})();
