const asyncHandler = require("express-async-handler");

//@desc Register new user
//@route POST /api/user/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
// Registration logic here
    res.status(201).send('User registered');
});

//@desc Login user
//@route POST /api/user/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    // Login logic here
    res.status(200).send('User logged in');
});

//@desc Get current user info
//@route GET /api/user/current
//@access Private
const getCurrentUser = asyncHandler(async (req, res) => {
    // Logic to get current user info here
    res.status(200).send('Current user info');
});

module.exports = {
    registerUser,
    loginUser,
    getCurrentUser
};