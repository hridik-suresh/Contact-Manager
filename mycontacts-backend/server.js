const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3000;


app.use('/api/contacts', require('./routes/contactRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
