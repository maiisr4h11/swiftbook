// Importing the Express framework
const express = require('express');
// Importing Mongoose to handle MongoDB interactions
const mongoose = require('mongoose');
// Importing CORS middleware to handle Cross-Origin Resource Sharing
const cors = require('cors');
// Importing dotenv to load environment variables from a .env file
const dotenv = require('dotenv');
// Load environment variables from .env file into process.env
dotenv.config();

// Initialize the Express application
const app = express();

// Middleware setup
// Middleware to parse JSON bodies of incoming requests
app.use(express.json());
// Middleware to enable CORS, allowing requests from different origins
app.use(cors());
// Global error handling middleware
// Middleware to handle any errors that occur in the application
app.use((err, req, res, next) => {
    // Log the error stack trace to the console
    console.error(err.stack);
    // Send a 500 Internal Server Error response with a generic error message
    res.status(500).json({ error: 'Something went wrong!' });
  });

  const foodFestRoutes = require('./routes/foodfestroute');
  app.use('/api/foodfest', foodFestRoutes);
  const bookVendorRoutes = require('./routes/bookvendorroute');
  app.use('/api/book-vendor', bookVendorRoutes);
// Connect to MongoDB and start the server
// Connect to MongoDB using the URI from environment variables
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // Log success message once connected to MongoDB
    console.log('Connected to MongoDB');
    // Define the port to listen on, defaulting to 5000 if not specified
    const port = process.env.PORT || 5000;
    // Start the Express server on the specified port
    app.listen(port, () => {
      // Log a message indicating the server has started and is listening on the port
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    // Log an error message if there is a problem connecting to MongoDB
    console.error('Error connecting to MongoDB:', error);
  });