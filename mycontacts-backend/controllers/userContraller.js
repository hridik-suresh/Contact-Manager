const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//@desc Register new user
//@route POST /api/user/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }

});

//@desc Login user
//@route POST /api/user/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    // Login logic here
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            { user: { name: user.name, email: user.email, id: user._id } },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' }
        );
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error('Invalid credentials');
    }
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