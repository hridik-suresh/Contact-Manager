const express = require('express');
const router = express.Router();
const validateTokenHandler = require('../middlewares/validateTokenHandler');
const { registerUser, loginUser, getCurrentUser } = require('../controllers/userContraller');


router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/current', validateTokenHandler, getCurrentUser);

module.exports = router;