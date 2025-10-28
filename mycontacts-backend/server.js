const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const { errorHandler } = require('./middlewares/errorHandler');

const PORT = process.env.PORT || 3000;

// Connect to MongoDB------------
async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/mycontactsDB');
}


main()
    .then(() =>{
        console.log("connected to MongoDB");
    })
    .catch((err)=> console.log(err));


// Middleware------------
app.use(express.json());// Middleware to parse JSON bodies

// Routes------------
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Error Handling Middleware------------
app.use(errorHandler);

// Start the server------------
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
