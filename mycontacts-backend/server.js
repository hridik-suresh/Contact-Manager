const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware------------
app.use(express.json());// Middleware to parse JSON bodies

// Routes------------

app.use('/api/contacts', require('./routes/contactRoutes'));

// Start the server------------
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
