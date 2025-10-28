const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Create new contact
//@route POST /api/contacts
//@access Public
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  res.status(201).json({ message: "create new contact" });
});

//@desc Get contact by ID
//@route GET /api/contacts/:id
//@access Public
const getContactById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `view contact with id ${req.params.id}` });
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update contact with id ${req.params.id}` });
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete contact with id ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContactById,
  updateContact,
  deleteContact
}
