const express = require('express');
const router = express.Router();
const { getContacts, createContact, getContactById, updateContact, deleteContact } = require('../controllers/contactController');
const validateTokenHandler = require("../middlewares/validateTokenHandler");



router.use(validateTokenHandler);

router.get('/', getContacts).post('/', createContact);
router.get('/:id', getContactById).put('/:id', updateContact).delete('/:id', deleteContact);

module.exports = router;
