const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    // Registration logic here
    res.status(201).send('User registered');
});

router.post('/login', (req, res) => {
    // Login logic here
    res.status(200).send('User logged in');
});

router.get('/current', (req, res) => {
    // Logic to get current user info here
    res.status(200).send('Current user info');
});

module.exports = router;